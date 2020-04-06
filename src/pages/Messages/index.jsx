import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import MessagesComponents from '../../components/MessagesComponents'
import { GetComment } from '../../api/Messages'
import './index.scss'
function Messages(props) {
  //留言列表
  const [data,setData]=useState([])
  //获取留言列表
  const GetCommentList=()=>{
    GetComment()
      .then((res)=>{
        setData(res.data.data)
      })
  }
  useEffect(()=>{
    GetCommentList()
  },[])
  return (
    <View>
      <View className="Messages">
        <Text className="text-black text-bold text-xxl">留言板</Text>
      </View>
      <MessagesComponents data={data} GetData={GetCommentList}/>
    </View>
  )
}

export default Messages
