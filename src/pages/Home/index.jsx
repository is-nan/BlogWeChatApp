import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { GetReleaseArticle } from '../../api/Home'
import './index.scss'
function Home (props) {
  const [data,setData]=useState([])
  useEffect(()=>{
    GetReleaseArticle()
      .then((res)=>{
        setData(res.data.data)
      })
  },[])
  return (
    <View className="Home">
      {
        data.map((Item,index)=>{
          return (
            <View className="Item" key={Item.id} onClick={()=>{
              Taro.redirectTo({
                url: `/pages/ArticleDetails/index?did=${Item.id}`
              })
            }}>
              <Text className="text-xxl text-bold text-shadow">{Item.title}</Text>
              <Text className="text-black text-df Excerpt">{Item.content.replace(/[#\r\n]/g, "").substring(0,100)}...</Text>
              <View style={{backgroundImage:`url(${Item.Cover})`}} className="cover shadow-blur"/>
            </View>
            )
        })
      }
    </View>
  )
}
Home.config={
  navigationBarTitleText: '首页',
  navigationBarBackgroundColor: "#ffffff",
  navigationBarTextStyle: "black"
}
export default Home
