import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import './index.scss'
function My(props) {
  return (
    <View className="My">
      <Image src="https://www.nanbk.com/usr/themes/Akina/images/avatar.png"
      className="Avatar shadow-blur"/>
      <Text className="text-center text-xxl text-black Name">南岸有归</Text>
      <Text className="text-df signature">嗨，我是南岸有归，一名 前端 开发者。</Text>
      <Text className="text-df signature">行路有良友，便是捷径。带上我吧，一起去看更大的世界。</Text>
      <Text className="text-center text-lg text-black Name">很高兴认识你</Text>
      <Text className="text-gray text-df text">坐标深圳.</Text>
      <Text className="text-gray text-df text">是一名前端开发者.</Text>
      <Text className="text-gray text-df text">这个小程序是react博客改版的简单小程序.</Text>
      <Text className="text-gray text-df text">使用的是Taro开发的.</Text>
      <Text className="text-center text-black Name">熟悉的一些技术</Text>
        <Text className="text-gray text-df text">
          Javascript、Vue、React、Uni-app、Taro、mpvue、Node.js、Go、Typescript、Mongodb、Mysql、Nginx、小程序开发
        </Text>
      <Text className="text-center text-black Name">还不太熟悉,想了解的技术</Text>
        <Text className="text-gray text-df text">
          算法、V8
        </Text>
      <Text className="text-center text-black Name">写过的项目</Text>
      <Text className="text-gray text-df text">
        叮叮开课官网、智联物联云平台、智联物联云小程序、react全栈博客、博客小程序、会计学堂官网、会计学堂微信小程序、会计学堂百度小程序、i指间App、烟有App
      </Text>
      <Text className="text-center text-black Name">博客地址(点击下方复制)：</Text>
        <Text className="text-gray text-df text link" onClick={()=>{
          Taro.setClipboardData({
            data: 'https://react.nanbk.com',
            success: function (res) {
              Taro.getClipboardData({
                success: function (res) {
                  console.log(res.data) // data
                }
              })
            }
          })
        }}>
          react.nanbk.com
        </Text>
      <Text className="text-center text-black Name">写过的项目</Text>
      <Text className="text-center text-black Name">联系方式</Text>
      <View className="Item">
        <Text className="text-df List">邮箱：isnanyg@gmail.com</Text>
      </View>
    </View>
  )
}
My.config={
  navigationBarTitleText: '关于我'
}
export default My
