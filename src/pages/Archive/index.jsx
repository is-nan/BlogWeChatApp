import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { GetCategoryList,GetTagList } from '../../api/Archive'
import './index.scss'
function Archive(props) {
  //分类列表
  const [Category,setCategory]=useState([])
  //标签列表
  const [Tags,setTags]=useState([])
  useEffect(()=>{
    GetCategoryList()
      .then((res)=>{
        setCategory(res.data.data)
      })
    GetTagList()
      .then((res)=>{
        setTags(res.data.data)
      })
  },[])
  return (
    <View className="Archive">
      <View>
        <Text className="Title text-center text-xxl text-black">分类</Text>
        <View className="Category">
          {
            Category.map((Item,index)=>{
              return (
                <View key={index} className="Item">
                  <Text className="CategoryName">{Item.CategoryName}</Text>
                  <Text className="CategoryCount">{Item.count}篇</Text>
                </View>
              )})
          }
        </View>
      </View>
      <View>
        <Text className="Title text-center text-xxl text-black">标签</Text>
        <View className="Tags">
          {
            Tags.map((Item,index)=>{
              return (
                <View key={index} className="Item">
                  <Text className="TagName">{Item.TagName}</Text>
                </View>
              )})
          }
        </View>
      </View>
    </View>
  )
}
Archive.options = {
  addGlobalClass: true
}
export default Archive
