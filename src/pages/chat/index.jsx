import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Chat() {
  useLoad(() => {
    console.log("Chat Page loaded.");
  });

  return (
    <View className="chat-page">
      <View className="chat-header">AI 助手</View>
      <View className="chat-content">正在开发中...</View>
    </View>
  );
}
