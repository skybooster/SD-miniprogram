import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Profile() {
  useLoad(() => {
    console.log('Profile Page loaded.')
  })

  return (
    <View className='profile-page'>
      <View className='profile-header'>个人中心</View>
      <View className='profile-content'>
        暂无信息
      </View>
    </View>
  )
}
