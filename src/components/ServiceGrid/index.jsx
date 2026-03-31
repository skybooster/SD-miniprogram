import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function ServiceGrid() {
  const services = [
    { title: "政策法规", path: "/PolicyRegulation/index", icon: "📜" },
    { title: "联系社区", path: "/ContactCommunity/Contact/index", icon: "🏘️" },
    { title: "卫生服务", path: "/HealthService/index", icon: "🏥" },
    { title: "资源清单", path: "/ResourceList/index", icon: "📚" },
    { title: "服务地图", path: "/ServiceMap/index", icon: "🗺️" },
    { title: "意见反馈", path: "/Feedback/index", icon: "💬" },
    { title: "健康指导", path: "/HealthGuidance/index", icon: "🍎" },
    { title: "养老用餐", path: "/ElderlyCareMeal/index", icon: "🍲" },
    { title: "更多服务", path: "/MoreServices/index", icon: "✨" },
  ];

  const handleServiceClick = (service) => {
    Taro.navigateTo({ url: service.path });
  };

  return (
    <View className="service-grid-wrapper">
      <View className="service-grid-container">
        {services.map((service, index) => (
          <View
            key={index}
            className="service-item"
            onClick={() => handleServiceClick(service)}
          >
            <View className="service-content">
              <Text className="service-icon">{service.icon}</Text>
              <Text className="service-title">{service.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
