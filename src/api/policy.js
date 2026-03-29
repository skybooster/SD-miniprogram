import Taro from "@tarojs/taro";
import request from "./request";
import proto from "./proto/policy";

const PolicyTypeResponse = proto.api.policy.PolicyTypeResponse;
const PolicyFileResponse = proto.api.policy.PolicyFileResponse;

const normalizePolicyTypes = (data) => {
  const policyTypes = data.policyTypes || data.policy_types || [];
  return {
    ...data,
    policyTypes,
    policy_types: policyTypes,
  };
};

const normalizePolicyFiles = (data) => {
  const sourceFiles = data.policyFiles || data.policy_files || [];
  const policyFiles = sourceFiles.map((item) => {
    const createTime = item.createTime || item.create_time || "";
    const index = item.index || "";
    return {
      ...item,
      index,
      createTime,
      create_time: createTime,
    };
  });
  return {
    ...data,
    policyFiles,
    policy_files: policyFiles,
  };
};

const decodePolicyTypeResponse = (data) => {
  if (!(data instanceof ArrayBuffer) && !(data instanceof Uint8Array)) {
    return normalizePolicyTypes(data || {});
  }
  const message = PolicyTypeResponse.decode(
    data instanceof Uint8Array ? data : new Uint8Array(data),
  );
  const result = PolicyTypeResponse.toObject(message, {
    longs: String,
    enums: String,
    bytes: String,
  });
  return normalizePolicyTypes(result);
};

const decodePolicyFileResponse = (data) => {
  if (!(data instanceof ArrayBuffer) && !(data instanceof Uint8Array)) {
    return normalizePolicyFiles(data || {});
  }
  const message = PolicyFileResponse.decode(
    data instanceof Uint8Array ? data : new Uint8Array(data),
  );
  const result = PolicyFileResponse.toObject(message, {
    longs: String,
    enums: String,
    bytes: String,
  });
  return normalizePolicyFiles(result);
};

export const getPolicyType = () => {
  return request({
    url: "/api/policy_type",
    method: "GET",
    header: {
      Authorization: Taro.getStorageSync("token") || "",
    },
    responseType: "arraybuffer",
  }).then((res) => decodePolicyTypeResponse(res));
};

export const getPolicyFile = (type) => {
  return request({
    url: `/api/policy_file?type=${encodeURIComponent(type)}`,
    method: "GET",
    header: {
      Authorization: Taro.getStorageSync("token") || "",
    },
    responseType: "arraybuffer",
  }).then((res) => decodePolicyFileResponse(res));
};

//文件内容列表
export const getPolicyFileIndexList = async (type) => {
  const res = await getPolicyFile(type);
  const files = res.policyFiles || res.policy_files || [];
  return files.map((file) => file.index).filter(Boolean);
};

//uuid拼接函数
export const getPolicyPdfBufferByUuid = async (uuid) => {
  const token = Taro.getStorageSync("token") || "";
  const encoded = encodeURIComponent(uuid || "");
  const candidateUrls = [
    `${process.env.TARO_APP_API}/api/mutil_media/download?uuid=${encoded}&bigfile=true`,
  ];

  const fs = Taro.getFileSystemManager();
  const normalizeArrayBuffer = (fileData) => {
    if (fileData instanceof ArrayBuffer) {
      return fileData;
    }
    if (fileData instanceof Uint8Array) {
      return fileData.buffer.slice(
        fileData.byteOffset,
        fileData.byteOffset + fileData.byteLength,
      );
    }
    return null;
  };

  const containsPdfMagic = (arrayBuffer) => {
    if (!arrayBuffer) {
      return false;
    }
    const bytes = new Uint8Array(arrayBuffer);
    const max = Math.min(bytes.length - 4, 1024);
    for (let i = 0; i <= max; i += 1) {
      if (
        bytes[i] === 0x25 &&
        bytes[i + 1] === 0x50 &&
        bytes[i + 2] === 0x44 &&
        bytes[i + 3] === 0x46
      ) {
        return true;
      }
    }
    return false;
  };

  const tryDownload = async (url) => {
    const downloadRes = await Taro.downloadFile({
      url,
      header: {
        Authorization: token,
      },
    });
    if (downloadRes.statusCode !== 200) {
      return null;
    }
    const fileInfo = await new Promise((resolve, reject) => {
      fs.getFileInfo({
        filePath: downloadRes.tempFilePath,
        success: resolve,
        fail: reject,
      });
    });
    if (!fileInfo?.size) {
      return null;
    }
    const fileData = await new Promise((resolve, reject) => {
      fs.readFile({
        filePath: downloadRes.tempFilePath,
        encoding: "base64",
        success: (res) => resolve(res.data),
        fail: (error) => reject(error),
      });
    });
    const arrayBuffer =
      typeof fileData === "string"
        ? Taro.base64ToArrayBuffer(fileData)
        : normalizeArrayBuffer(fileData);
    if (!arrayBuffer || arrayBuffer.byteLength === 0) {
      return null;
    }
    if (!containsPdfMagic(arrayBuffer)) {
      return null;
    }
    return arrayBuffer;
  };

  const debugRes = await Taro.request({
    url: candidateUrls[0],
    method: "GET",
    responseType: "arraybuffer",
    header: {
      Authorization: token,
    },
  });
  const debugBuffer = normalizeArrayBuffer(debugRes.data);
  console.log("[policy-pdf] download debug:", {
    url: candidateUrls[0],
    tokenLength: token.length,
    statusCode: debugRes.statusCode,
    header: debugRes.header,
    byteLength: debugBuffer ? debugBuffer.byteLength : 0,
    firstBytes: debugBuffer
      ? Array.from(new Uint8Array(debugBuffer).slice(0, 16))
      : [],
  });

  for (const url of candidateUrls) {
    try {
      const buffer = await tryDownload(url);
      if (buffer) {
        return buffer;
      }
    } catch (error) {}
  }

  throw new Error("PDF 文件为空或参数名不匹配（请确认后端使用 uuid 还是 uid）");
};
