import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image,Input } from '@tarojs/components'
import moment from "moment";
import "moment/locale/zh-cn";
import './index.scss'
import { NewComment } from '../../api/Messages'

function MessagesComponents (props) {
  //留言信息
  const [Comment,setComment]=useState({
    content:'',username:'',Avatar:'',url:'',email:'',ArticleId:null,CommentId:null
  })
  //提交留言
  const AddComment=()=>{
    NewComment(Comment)
      .then((res)=>{
        console.log(res.data.code)
        setComment({content:'',username:'',Avatar:'',url:'',email:'',ArticleId:null,CommentId:null})
        props.GetData()
      })
  }
  return (
    <View className="MessagesComponents">
      <View className="Comment">
        <Input placeholder="输入你的称呼 (必填)" className="NoneBorder"
        value={Comment.username} onChange={(e)=>{
          setComment({...Comment,username:e.detail.value})
        }}/>
        <Input placeholder="来说两句吧 (必填)" className="NoneBorder"
        value={Comment.content} onChange={(e)=>{
          setComment({...Comment,content:e.detail.value})
        }}/>
        <Input placeholder="Email地址(选填) (选填，方便联系您，不会公开)" className="Border"
        value={Comment.email} onChange={(e)=>{
          setComment({...Comment,email:e.detail.value})
        }}/>
        <Input placeholder="个人地址(选填) (选填)" className="Border"
        value={Comment.url} onChange={(e)=>{
          setComment({...Comment,url:e.detail.value})
        }}/>
        <Button className="Button" onClick={()=>{AddComment()}}>保存</Button>
      </View>
      {
        props.data.map((Item,index)=>{
          return (
            <View className="MessagesList">
              <View className="User">
                <View style={{marginRight:10+'px',marginLeft:5+'%'}}>
                  <Image src={Item.Avatar?Item.Avatar:"https://www.images.nanbk.com/images/2020/03/25/iiyf1hatsit.jpg"}
                         className="Avatar"/>
                </View>
                <View>
                  <Text className="Name text-black text-lg">
                    {Item.username}
                  </Text>
                  <Text className="Date text-grey text-df">
                    {moment(Item.createdAt).startOf('second').fromNow()}
                  </Text>
                </View>
              </View>
              <View className="Content text-black text-df text-shadow">
                {Item.content}
              </View>
            </View>
          )
        })
      }
    </View>
  )
}
MessagesComponents.options = {
  addGlobalClass: true
}
export default MessagesComponents
