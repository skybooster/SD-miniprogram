import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import WarmTip from '../../components/WarmTip'
import BannerSwiper from '../../components/BannerSwiper'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const bannerImages = [
    { url: require('../../../assets/微信图片_20260114124948.jpg'), alt: '轮播图1' },
    { url: require('../../../assets/微信图片_20260114124948.jpg'), alt: '轮播图2' },
    { url: require('../../../assets/微信图片_20260114124948.jpg'), alt: '轮播图3' }
  ]  // 示例图片数据

  return (
    <View className='index'>
      <BannerSwiper 
        images={bannerImages}
        autoplay={3000}
        height={150}
        onChange={(index) => console.log('当前轮播索引:', index)}
      />
      <WarmTip text="欢迎来到小程序" />
    </View>
  )
}
