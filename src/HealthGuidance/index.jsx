import { useEffect, useMemo, useState } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import {
  getHealthGuideTypes,
  getHealthGuideContentsWithFileUrl,
  buildHealthGuideFileUrl,
} from "../api/healthGuidance";
import "./index.scss";

export default function HealthGuidance() {
  const [loading, setLoading] = useState(false);
  const [videoFiles, setVideoFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [videoTree, setVideoTree] = useState([]);
  const [pdfTree, setPdfTree] = useState([]);
  const [errorText, setErrorText] = useState("");

  const hasData = useMemo(() => {
    return videoFiles.length > 0 || pdfFiles.length > 0;
  }, [videoFiles, pdfFiles]);

  useEffect(() => {
    const fetchHealthGuidanceData = async () => {
      setLoading(true);
      setErrorText("");
      try {
        const typesRes = await getHealthGuideTypes();
        const types =
          typesRes.healthGuideTypes || typesRes.health_guide_types || [];
        console.log("[HealthGuidance] getHealthGuideTypes:", types);

        const pairs = types.flatMap((item) => {
          const typeOne = item.typeOne ?? item.id ?? 0;
          const typeName = item.typeName ?? item.type_name ?? "未分类";
          const options = item.typeTwoOptions || [];
          if (!options.length) {
            const fallbackTypeTwo = item.typeTwo ?? item.type_two ?? "";
            return fallbackTypeTwo
              ? [
                  {
                    type_one: typeOne,
                    type_two: fallbackTypeTwo,
                    type_name: typeName,
                  },
                ]
              : [];
          }
          return options.map((typeTwo) => ({
            type_one: typeOne,
            type_two: typeTwo,
            type_name: typeName,
          }));
        });
        console.log("[HealthGuidance] 目录层级:", pairs);

        const pairResults = await Promise.all(
          pairs.map(async (pair) => {
            try {
              const contents = await getHealthGuideContentsWithFileUrl(
                pair.type_one,
                pair.type_two,
              );
              return contents.map((item) => ({
                ...item,
                type_one: pair.type_one,
                type_two: pair.type_two,
                type_name: pair.type_name,
              }));
            } catch (error) {
              console.error("[HealthGuidance] 内容获取失败:", pair, error);
              return [];
            }
          }),
        );

        const allContents = pairResults.flat();
        console.log("[HealthGuidance] 全量内容:", allContents);

        const normalizedFiles = allContents
          .map((item) => {
            const content = item.contentParsed || {};
            const fileType = String(content.file_type || "")
              .toLowerCase()
              .trim();
            const uuid = item.fileUuid || content.uuid || content.index || "";
            const title =
              content.title || `${item.type_two || "健康指导"}内容文件`;
            const fileUrl = item.fileUrl || buildHealthGuideFileUrl(uuid);
            return {
              id: item.id || `${item.type_one}-${item.type_two}-${uuid}`,
              typeOne: item.type_one || item.typeOne || 0,
              typeName: item.type_name || item.typeName || "未分类",
              typeTwo: item.type_two || item.typeTwo || "",
              title,
              description: content.description || item.description || "",
              uuid,
              fileType,
              fileUrl,
            };
          })
          .filter((item) => item.uuid && item.fileType);

        const buildFileTree = (files) => {
          const groupedMap = new Map();
          files.forEach((item) => {
            const levelOneKey = item.typeName || "未分类";
            const levelTwoKey = item.typeTwo || "未分类";
            if (!groupedMap.has(levelOneKey)) {
              groupedMap.set(levelOneKey, new Map());
            }
            const levelTwoMap = groupedMap.get(levelOneKey);
            if (!levelTwoMap.has(levelTwoKey)) {
              levelTwoMap.set(levelTwoKey, []);
            }
            levelTwoMap.get(levelTwoKey).push(item);
          });
          return Array.from(groupedMap.entries()).map(
            ([typeName, levelTwoMap]) => ({
              typeName,
              children: Array.from(levelTwoMap.entries()).map(
                ([typeTwo, list]) => ({
                  typeTwo,
                  files: list,
                }),
              ),
            }),
          );
        };

        const nextVideoFiles = normalizedFiles.filter(
          (item) => item.fileType === "video",
        );
        const nextPdfFiles = normalizedFiles.filter(
          (item) => item.fileType === "pdf",
        );
        const nextVideoTree = buildFileTree(nextVideoFiles);
        const nextPdfTree = buildFileTree(nextPdfFiles);

        setVideoFiles(nextVideoFiles);
        setPdfFiles(nextPdfFiles);
        setVideoTree(nextVideoTree);
        setPdfTree(nextPdfTree);

        console.log("[HealthGuidance] 视频文件:", nextVideoFiles);
        console.log("[HealthGuidance] pdf 文件:", nextPdfFiles);
        console.log("[HealthGuidance] 视频分级目录:", nextVideoTree);
        console.log("[HealthGuidance] pdf 分级目录:", nextPdfTree);
      } catch (error) {
        console.error("[HealthGuidance] API 调用失败:", error);
        setErrorText("健康指导内容获取失败，请稍后重试");
      } finally {
        setLoading(false);
      }
    };

    fetchHealthGuidanceData();
  }, []);

  const goBack = () => {
    Taro.navigateBack();
  };

  const handlePreviewFile = (item) => {
    Taro.navigateTo({
      url: `/HealthGuidance/preview/index?uuid=${encodeURIComponent(item.uuid)}&title=${encodeURIComponent(item.title)}&fileType=${encodeURIComponent(item.fileType)}`,
    });
  };

  return (
    <View className="health-guidance-page">
      <View className="custom-header">
        <View className="nav-bar">
          <View className="back-btn" onClick={goBack}>
            <Text>&lt; 返回</Text>
          </View>
        </View>
        <View className="header-content">
          <Text className="title">健康指导</Text>
          <Text className="subtitle">视频与文件分类预览</Text>
        </View>
      </View>

      <View className="content-panel">
        <View className="section-card">
          <Text className="section-title">视频预览区</Text>
          {videoTree.length ? (
            videoTree.map((levelOne) => (
              <View
                className="pdf-level-one"
                key={`video-${levelOne.typeName}`}
              >
                <Text className="pdf-level-one-title">{levelOne.typeName}</Text>
                {levelOne.children.map((levelTwo) => (
                  <View
                    className="pdf-level-two"
                    key={`video-${levelOne.typeName}-${levelTwo.typeTwo}`}
                  >
                    <Text className="pdf-level-two-title">
                      {levelTwo.typeTwo}
                    </Text>
                    {levelTwo.files.map((item) => (
                      <View
                        className="pdf-item"
                        key={item.id}
                        onClick={() => handlePreviewFile(item)}
                      >
                        <Text className="item-title">{item.title}</Text>
                        <Text className="item-action">点击播放</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))
          ) : (
            <Text className="empty-text">
              {loading ? "正在加载视频..." : "暂无可预览视频"}
            </Text>
          )}
        </View>

        <View className="section-card">
          <Text className="section-title">PDF 文件预览区</Text>
          {pdfTree.length ? (
            pdfTree.map((levelOne) => (
              <View className="pdf-level-one" key={levelOne.typeName}>
                <Text className="pdf-level-one-title">{levelOne.typeName}</Text>
                {levelOne.children.map((levelTwo) => (
                  <View
                    className="pdf-level-two"
                    key={`${levelOne.typeName}-${levelTwo.typeTwo}`}
                  >
                    <Text className="pdf-level-two-title">
                      {levelTwo.typeTwo}
                    </Text>
                    {levelTwo.files.map((item) => (
                      <View
                        className="pdf-item"
                        key={item.id}
                        onClick={() => handlePreviewFile(item)}
                      >
                        <Text className="item-title">{item.title}</Text>
                        <Text className="item-action">点击预览</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))
          ) : (
            <Text className="empty-text">
              {loading ? "正在加载 PDF..." : "暂无可预览 PDF 文件"}
            </Text>
          )}
        </View>

        {!loading && !hasData && errorText ? (
          <Text className="error-text">{errorText}</Text>
        ) : null}
      </View>
    </View>
  );
}
