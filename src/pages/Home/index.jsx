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
            <View className="Item" key={Item.id}>
              <Text className="text-black text-bold">{Item.title}</Text>
              <Text className="text-gray Excerpt">{Item.content.replace(/[#]/g, "")}</Text>
              <Image src={Item.Cover} className="cover"/>
            </View>
            )
        })
      }
    </View>
  )
}

export default Home
