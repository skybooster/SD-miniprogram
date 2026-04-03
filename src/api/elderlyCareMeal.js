import protobuf from "protobufjs/minimal";
import request, { checkAuth, withQuery } from "./request";

const Reader = protobuf.Reader;

const logDebug = (label, payload) => {
  console.log(`[elderlyCareMeal] ${label}:`, payload);
};

const normalizeLong = (value) => {
  if (value === null || value === undefined) return "";
  return typeof value === "object" && typeof value.toString === "function"
    ? value.toString()
    : String(value);
};

const toUint8Array = (data) => {
  if (data instanceof Uint8Array) {
    return data;
  }
  if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  }
  return null;
};

const decodeDinnerProvider = (reader, length) => {
  const end = length === undefined ? reader.len : reader.pos + length;
  const message = {};

  while (reader.pos < end) {
    const tag = reader.uint32();
    switch (tag >>> 3) {
      case 1:
        message.id = reader.int32();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.address = reader.string();
        break;
      case 4:
        message.phone = reader.string();
        break;
      case 5:
        message.latitude = reader.float();
        break;
      case 6:
        message.longitude = reader.float();
        break;
      case 7:
        message.service_time = reader.string();
        break;
      case 8:
        message.bonus_info = reader.string();
        break;
      case 9:
        message.meal_style = reader.string();
        break;
      case 10:
        message.create_time = normalizeLong(reader.int64());
        break;
      default:
        reader.skipType(tag & 7);
        break;
    }
  }

  return message;
};

const decodeDetailMeal = (reader, length) => {
  const end = length === undefined ? reader.len : reader.pos + length;
  const message = {};

  while (reader.pos < end) {
    const tag = reader.uint32();
    switch (tag >>> 3) {
      case 1:
        message.id = reader.int32();
        break;
      case 2:
        message.type = reader.string();
        break;
      case 3:
        message.date_time = reader.string();
        break;
      case 4:
        message.meal_info = reader.string();
        break;
      case 5:
        message.belong_to = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
    }
  }

  return message;
};

const decodeListResponse = (bytes, listFieldName, decodeItem) => {
  const reader = bytes instanceof Reader ? bytes : Reader.create(bytes);
  const end = reader.len;
  const message = { [listFieldName]: [] };

  while (reader.pos < end) {
    const tag = reader.uint32();
    const fieldNo = tag >>> 3;
    switch (fieldNo) {
      case 1:
        message[listFieldName].push(decodeItem(reader, reader.uint32()));
        break;
      case 2:
        message.code = reader.int32();
        break;
      case 3:
        message.message = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
    }
  }

  return message;
};

const pickFirstArray = (obj) => {
  if (!obj || typeof obj !== "object") return [];
  const values = Object.values(obj);
  const found = values.find(
    (value) =>
      Array.isArray(value) && (!value.length || typeof value[0] === "object"),
  );
  return Array.isArray(found) ? found : [];
};

const normalizeProviderListResponse = (res) => {
  const list = Array.isArray(res?.dinner_providers)
    ? res.dinner_providers
    : Array.isArray(res?.dinnerProviders)
      ? res.dinnerProviders
      : Array.isArray(res?.providers)
        ? res.providers
        : Array.isArray(res?.data)
          ? res.data
          : pickFirstArray(res);

  return {
    ...res,
    dinner_providers: list,
    dinnerProviders: list,
  };
};

const normalizeDetailMealListResponse = (res) => {
  const list = Array.isArray(res?.detail_meals)
    ? res.detail_meals
    : Array.isArray(res?.detailMeals)
      ? res.detailMeals
      : Array.isArray(res?.meals)
        ? res.meals
        : Array.isArray(res?.data)
          ? res.data
          : pickFirstArray(res);

  return {
    ...res,
    detail_meals: list,
    detailMeals: list,
  };
};

const decodeProviderResponse = (data) => {
  logDebug("decodeProviderResponse.raw", {
    isArrayBuffer: data instanceof ArrayBuffer,
    isUint8Array: data instanceof Uint8Array,
    byteLength:
      data instanceof ArrayBuffer
        ? data.byteLength
        : data instanceof Uint8Array
          ? data.byteLength
          : undefined,
    rawType: typeof data,
  });

  const payload = toUint8Array(data);
  if (!payload) {
    throw new Error(
      "Strict proto mode: dinner_provider response is not ArrayBuffer",
    );
  }

  try {
    const normalized = normalizeProviderListResponse(
      decodeListResponse(payload, "dinner_providers", decodeDinnerProvider),
    );
    logDebug("decodeProviderResponse.normalized(proto)", normalized);
    return normalized;
  } catch (error) {
    logDebug("decodeProviderResponse.error", error);
    throw new Error(
      "Strict proto mode: failed to decode dinner_provider response",
    );
  }
};

const decodeDetailMealResponse = (data) => {
  logDebug("decodeDetailMealResponse.raw", {
    isArrayBuffer: data instanceof ArrayBuffer,
    isUint8Array: data instanceof Uint8Array,
    byteLength:
      data instanceof ArrayBuffer
        ? data.byteLength
        : data instanceof Uint8Array
          ? data.byteLength
          : undefined,
    rawType: typeof data,
  });

  const payload = toUint8Array(data);
  if (!payload) {
    throw new Error(
      "Strict proto mode: detail_meal response is not ArrayBuffer",
    );
  }

  try {
    const normalized = normalizeDetailMealListResponse(
      decodeListResponse(payload, "detail_meals", decodeDetailMeal),
    );
    logDebug("decodeDetailMealResponse.normalized(proto)", normalized);
    return normalized;
  } catch (error) {
    logDebug("decodeDetailMealResponse.error", error);
    throw new Error("Strict proto mode: failed to decode detail_meal response");
  }
};

export const getDinnerProviders = () => {
  logDebug("getDinnerProviders.request", {
    url: "/api/dinner_provider",
    method: "GET",
    responseType: "arraybuffer",
  });

  return request({
    url: "/api/dinner_provider",
    method: "GET",
    responseType: "arraybuffer",
  }).then((res) => {
    const decoded = checkAuth(decodeProviderResponse(res));
    logDebug("getDinnerProviders.response", decoded);
    return decoded;
  });
};

export const addDinnerProvider = (data) => {
  return request({
    url: "/api/dinner_provider",
    method: "POST",
    data,
  });
};

export const updateDinnerProvider = (id, data) => {
  return request({
    url: withQuery("/api/dinner_provider", { id }),
    method: "PUT",
    data,
  });
};

export const deleteDinnerProvider = (id) => {
  return request({
    url: withQuery("/api/dinner_provider", { id }),
    method: "DELETE",
  });
};

export const addDetailMeal = (data) => {
  return request({
    url: "/api/detail_meal",
    method: "POST",
    data,
  });
};

export const getDetailMeals = (params = {}) => {
  const belongto = params?.belongto ?? params?.belong_to;
  const datetime = params?.datetime;
  const type = params?.type;

  const query = {
    belongto,
    datetime,
    type,
  };

  logDebug("getDetailMeals.request", {
    url: "/api/detail_meal",
    method: "GET",
    query,
    responseType: "arraybuffer",
  });

  return request({
    url: withQuery("/api/detail_meal", query),
    method: "GET",
    responseType: "arraybuffer",
  }).then((res) => {
    const decoded = checkAuth(decodeDetailMealResponse(res));
    logDebug("getDetailMeals.response", decoded);
    return decoded;
  });
};

export const updateDetailMeal = (id, data) => {
  return request({
    url: withQuery("/api/detail_meal", { id }),
    method: "PUT",
    data,
  });
};

export const deleteDetailMeal = (id) => {
  return request({
    url: withQuery("/api/detail_meal", { id }),
    method: "DELETE",
  });
};
