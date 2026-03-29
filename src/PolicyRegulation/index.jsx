import { View, Text, RadioGroup, Radio, Canvas } from "@tarojs/components";
import { useState, useEffect, useRef } from "react";
import Taro from "@tarojs/taro";
import { getPolicyType, getPolicyFile, getPolicyPdfBufferByUuid } from "../api";
import "./index.scss";

export default function PolicyRegulation() {
  const [policyTypes, setPolicyTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [policyFiles, setPolicyFiles] = useState([]);
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [pdfError, setPdfError] = useState("");
  const loadingUuidRef = useRef("");
  const pdfjsRef = useRef(null);

  const ensurePdfjs = async () => {
    if (pdfjsRef.current) {
      return pdfjsRef.current;
    }
    const globalObj = Function("return this")();
    if (typeof globalObj.DOMMatrix === "undefined") {
      class MiniDOMMatrix {
        constructor(init) {
          this.a = 1;
          this.b = 0;
          this.c = 0;
          this.d = 1;
          this.e = 0;
          this.f = 0;
          if (Array.isArray(init)) {
            this.a = Number(init[0] ?? 1);
            this.b = Number(init[1] ?? 0);
            this.c = Number(init[2] ?? 0);
            this.d = Number(init[3] ?? 1);
            this.e = Number(init[4] ?? 0);
            this.f = Number(init[5] ?? 0);
          } else if (init && typeof init === "object") {
            this.a = Number(init.a ?? 1);
            this.b = Number(init.b ?? 0);
            this.c = Number(init.c ?? 0);
            this.d = Number(init.d ?? 1);
            this.e = Number(init.e ?? 0);
            this.f = Number(init.f ?? 0);
          }
          this.m11 = this.a;
          this.m12 = this.b;
          this.m13 = 0;
          this.m14 = 0;
          this.m21 = this.c;
          this.m22 = this.d;
          this.m23 = 0;
          this.m24 = 0;
          this.m31 = 0;
          this.m32 = 0;
          this.m33 = 1;
          this.m34 = 0;
          this.m41 = this.e;
          this.m42 = this.f;
          this.m43 = 0;
          this.m44 = 1;
          this.is2D = true;
          this.isIdentity =
            this.a === 1 &&
            this.b === 0 &&
            this.c === 0 &&
            this.d === 1 &&
            this.e === 0 &&
            this.f === 0;
        }

        _sync() {
          this.m11 = this.a;
          this.m12 = this.b;
          this.m21 = this.c;
          this.m22 = this.d;
          this.m41 = this.e;
          this.m42 = this.f;
          this.isIdentity =
            this.a === 1 &&
            this.b === 0 &&
            this.c === 0 &&
            this.d === 1 &&
            this.e === 0 &&
            this.f === 0;
          return this;
        }

        multiplySelf(other) {
          const o =
            other instanceof MiniDOMMatrix ? other : new MiniDOMMatrix(other);
          const a = this.a * o.a + this.c * o.b;
          const b = this.b * o.a + this.d * o.b;
          const c = this.a * o.c + this.c * o.d;
          const d = this.b * o.c + this.d * o.d;
          const e = this.a * o.e + this.c * o.f + this.e;
          const f = this.b * o.e + this.d * o.f + this.f;
          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
          this.e = e;
          this.f = f;
          return this._sync();
        }

        preMultiplySelf(other) {
          const o =
            other instanceof MiniDOMMatrix ? other : new MiniDOMMatrix(other);
          const a = o.a * this.a + o.c * this.b;
          const b = o.b * this.a + o.d * this.b;
          const c = o.a * this.c + o.c * this.d;
          const d = o.b * this.c + o.d * this.d;
          const e = o.a * this.e + o.c * this.f + o.e;
          const f = o.b * this.e + o.d * this.f + o.f;
          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
          this.e = e;
          this.f = f;
          return this._sync();
        }

        translateSelf(tx = 0, ty = 0) {
          return this.multiplySelf([1, 0, 0, 1, tx, ty]);
        }

        scaleSelf(scaleX = 1, scaleY = scaleX) {
          return this.multiplySelf([scaleX, 0, 0, scaleY, 0, 0]);
        }

        rotateSelf(angle = 0) {
          const rad = (angle * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          return this.multiplySelf([cos, sin, -sin, cos, 0, 0]);
        }

        inverse() {
          const clone = new MiniDOMMatrix(this);
          return clone.invertSelf();
        }

        invertSelf() {
          const det = this.a * this.d - this.b * this.c;
          if (!det) {
            this.a = NaN;
            this.b = NaN;
            this.c = NaN;
            this.d = NaN;
            this.e = NaN;
            this.f = NaN;
            return this._sync();
          }
          const a = this.d / det;
          const b = -this.b / det;
          const c = -this.c / det;
          const d = this.a / det;
          const e = (this.c * this.f - this.d * this.e) / det;
          const f = (this.b * this.e - this.a * this.f) / det;
          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
          this.e = e;
          this.f = f;
          return this._sync();
        }

        transformPoint(point = { x: 0, y: 0 }) {
          const x = Number(point.x ?? 0);
          const y = Number(point.y ?? 0);
          return {
            x: this.a * x + this.c * y + this.e,
            y: this.b * x + this.d * y + this.f,
            z: Number(point.z ?? 0),
            w: Number(point.w ?? 1),
          };
        }
      }
      globalObj.DOMMatrix = MiniDOMMatrix;
      globalObj.WebKitCSSMatrix = MiniDOMMatrix;
    }
    if (typeof globalObj.ReadableStream === "undefined") {
      class MiniReadableStream {
        constructor(source = {}) {
          this._queue = [];
          this._closed = false;
          this._errored = null;
          this._pending = [];
          const controller = {
            enqueue: (chunk) => {
              if (this._closed || this._errored) return;
              if (this._pending.length > 0) {
                const resolver = this._pending.shift();
                resolver({ value: chunk, done: false });
                return;
              }
              this._queue.push(chunk);
            },
            close: () => {
              if (this._closed || this._errored) return;
              this._closed = true;
              while (this._pending.length > 0) {
                const resolver = this._pending.shift();
                resolver({ value: undefined, done: true });
              }
            },
            error: (error) => {
              if (this._closed || this._errored) return;
              this._errored = error || new Error("Stream error");
              while (this._pending.length > 0) {
                const resolver = this._pending.shift();
                resolver(Promise.reject(this._errored));
              }
            },
          };
          if (typeof source.start === "function") {
            source.start(controller);
          }
          this._source = source;
          this._controller = controller;
        }

        getReader() {
          return {
            read: () => {
              if (this._errored) {
                return Promise.reject(this._errored);
              }
              if (this._queue.length > 0) {
                return Promise.resolve({
                  value: this._queue.shift(),
                  done: false,
                });
              }
              if (this._closed) {
                return Promise.resolve({ value: undefined, done: true });
              }
              if (typeof this._source.pull === "function") {
                this._source.pull(this._controller);
              }
              return new Promise((resolve, reject) => {
                this._pending.push((result) => {
                  if (result && typeof result.then === "function") {
                    result.then(resolve).catch(reject);
                    return;
                  }
                  resolve(result);
                });
              });
            },
            cancel: (reason) => {
              this._closed = true;
              this._queue = [];
              if (typeof this._source.cancel === "function") {
                return Promise.resolve(this._source.cancel(reason));
              }
              return Promise.resolve();
            },
          };
        }
      }
      globalObj.ReadableStream = MiniReadableStream;
    }
    if (typeof globalObj.DOMException === "undefined") {
      class MiniDomException extends Error {
        constructor(message, name) {
          super(message || "");
          this.name = name || "Error";
        }
      }
      globalObj.DOMException = MiniDomException;
    }
    const workerModule = await import("pdfjs-dist/legacy/build/pdf.worker");
    const worker = workerModule?.WorkerMessageHandler
      ? workerModule
      : workerModule?.default;
    if (worker?.WorkerMessageHandler) {
      globalObj.pdfjsWorker = {
        WorkerMessageHandler: worker.WorkerMessageHandler,
      };
    }
    const module = await import("pdfjs-dist/legacy/build/pdf");
    const pdfjs = module?.getDocument ? module : module?.default;
    if (!pdfjs || typeof pdfjs.getDocument !== "function") {
      throw new Error("Load pdf.js failed");
    }
    if (pdfjs.GlobalWorkerOptions) {
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
    }
    pdfjsRef.current = pdfjs;
    return pdfjs;
  };

  useEffect(() => {
    const fetchPolicyTypes = async () => {
      try {
        const res = await getPolicyType();
        const types = res.policyTypes || res.policy_types || [];
        setPolicyTypes(types);
        if (types.length > 0) {
          setSelectedType(types[0].type);
        }
      } catch (error) {
        console.error("Failed to fetch policy types", error);
      }
    };

    fetchPolicyTypes();
  }, []);

  useEffect(() => {
    if (selectedType) {
      const fetchPolicyFiles = async () => {
        try {
          const res = await getPolicyFile(selectedType);
          const files = res.policyFiles || res.policy_files || [];
          setPolicyFiles(files);
          setSelectedFileId(files[0]?.id || null);
        } catch (error) {
          console.error("Failed to fetch policy files", error);
          setPolicyFiles([]);
          setSelectedFileId(null);
        }
      };

      fetchPolicyFiles();
    }
  }, [selectedType]);

  useEffect(() => {
    const selectedFile = policyFiles.find((file) => file.id === selectedFileId);
    const selectedUuid = selectedFile?.index;
    if (!selectedUuid) {
      setPageCount(0);
      setPdfError("");
      return;
    }

    const getCanvasNode = (canvasId) => {
      return new Promise((resolve, reject) => {
        Taro.createSelectorQuery()
          .select(`#${canvasId}`)
          .fields({ node: true, size: true }, (res) => {
            if (res && res.node) {
              resolve(res);
              return;
            }
            reject(new Error(`Canvas not found: ${canvasId}`));
          })
          .exec();
      });
    };

    const renderPdf = async () => {
      try {
        loadingUuidRef.current = selectedUuid;
        setLoadingPdf(true);
        setPdfError("");
        setPageCount(0);
        const pdfBinary = await getPolicyPdfBufferByUuid(selectedUuid);
        if (loadingUuidRef.current !== selectedUuid) {
          return;
        }
        const data =
          pdfBinary instanceof Uint8Array
            ? pdfBinary
            : new Uint8Array(pdfBinary);
        const pdfjs = await ensurePdfjs();
        const pdf = await pdfjs.getDocument({
          data,
          disableWorker: true,
        }).promise;
        if (loadingUuidRef.current !== selectedUuid) {
          return;
        }
        setPageCount(pdf.numPages);
        await new Promise((resolve) => setTimeout(resolve, 0));
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (loadingUuidRef.current !== selectedUuid) {
            return;
          }
          const page = await pdf.getPage(pageNumber);
          const canvasId = `pdf-canvas-${pageNumber}`;
          const canvasInfo = await getCanvasNode(canvasId);
          const canvas = canvasInfo.node;
          const context = canvas.getContext("2d");
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = canvasInfo.width / baseViewport.width;
          const viewport = page.getViewport({ scale: scale > 0 ? scale : 1.2 });
          const pixelRatio = Taro.getSystemInfoSync().pixelRatio || 1;
          canvas.width = Math.floor(viewport.width * pixelRatio);
          canvas.height = Math.floor(viewport.height * pixelRatio);
          context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          context.clearRect(0, 0, viewport.width, viewport.height);
          await page.render({
            canvasContext: context,
            viewport,
          }).promise;
        }
      } catch (error) {
        console.error("PDF render failed", error);
        setPdfError(error?.message || "PDF预览失败");
      } finally {
        if (loadingUuidRef.current === selectedUuid) {
          setLoadingPdf(false);
        }
      }
    };

    renderPdf();
  }, [selectedFileId, policyFiles]);

  const handleTypeChange = (event) => {
    setSelectedType(event.detail.value);
  };

  const goBack = () => {
    Taro.navigateBack();
  };

  return (
    <View className="policy-regulation-page">
      <View className="custom-header">
        <View className="nav-bar">
          <View className="back-btn" onClick={goBack}>
            <Text>&lt; 返回</Text>
          </View>
        </View>
        <View className="header-content">
          <Text className="title">政策法规</Text>
          <Text className="subtitle">了解最新的政策和规定</Text>
        </View>
      </View>

      <View className="form-item">
        <Text className="form-label">政策类型</Text>
        <RadioGroup className="radio-group" onChange={handleTypeChange}>
          {policyTypes.map((policyType) => (
            <Radio
              key={policyType.id}
              className="radio"
              value={policyType.type}
              checked={selectedType === policyType.type}
            >
              {policyType.type}
            </Radio>
          ))}
        </RadioGroup>
      </View>

      <View className="policy-files-list">
        {policyFiles.map((file) => (
          <View
            key={file.id}
            className={`policy-file-item ${selectedFileId === file.id ? "active" : ""}`}
            onClick={() => setSelectedFileId(file.id)}
          >
            <Text className="file-title">{file.title}</Text>
            <Text className="file-index">{file.index}</Text>
          </View>
        ))}
      </View>

      <View className="pdf-preview-card">
        <Text className="pdf-title">PDF预览</Text>
        {loadingPdf && <Text className="pdf-status">正在加载PDF...</Text>}
        {!!pdfError && <Text className="pdf-status error">{pdfError}</Text>}
        {!loadingPdf && !pdfError && pageCount === 0 && (
          <Text className="pdf-status">请选择政策文件进行预览</Text>
        )}
        {Array.from({ length: pageCount }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <View key={pageNumber} className="pdf-page">
              <Text className="page-label">第 {pageNumber} 页</Text>
              <Canvas
                id={`pdf-canvas-${pageNumber}`}
                canvasId={`pdf-canvas-${pageNumber}`}
                type="2d"
                className="pdf-canvas"
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
