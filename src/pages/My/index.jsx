import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import './index.scss'
function My(props) {
  return (
    <View className="My">
      <Image src="https://www.images.nanbk.com/images/2020/03/12/15652482794301084.jpg"
      className="Avatar shadow-blur"/>
      <Text className="text-center text-xxl text-black Name">南岸有归</Text>
      <Text className="text-df signature">嗨，我是南岸有归，一名 前端 开发者。</Text>
      <Text className="text-df signature">行路有良友，便是捷径。带上我吧，一起去看更大的世界。</Text>
      <Text className="text-center text-lg text-black Name">很高兴认识你</Text>
      <Text className="text-gray text-df text">坐标深圳.</Text>
      <Text className="text-gray text-df text">是一名前端开发者.</Text>
      <Text className="text-center text-black Name">熟悉的一些技术</Text>
        <Text className="text-gray text-df text">
          Javascript、Vue、React、Node.js、Typescript、Mongodb、Mysql、Nginx、小程序开发
        </Text>
      <Text className="text-center text-black Name">还不太熟悉,想了解的技术</Text>
        <Text className="text-gray text-df text">
          算法、Go、V8
        </Text>
      <Text className="text-center text-black Name">写过的项目</Text>
      <Text className="text-gray text-df text">
        叮叮开课官网、智联物联云平台、智联物联云小程序、react全栈博客、博客小程序
      </Text>
      <Text className="text-center text-black Name">联系方式</Text>
      <View className="Item">
        <Text className="text-df List">邮箱:1149807390@qq.com</Text>
        <Text className="text-df List">qq:1149807390</Text>
      </View>
    </View>
  )
}

export default My
