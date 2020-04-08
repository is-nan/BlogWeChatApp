import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image,Input,Icon } from '@tarojs/components'
import moment from "moment";
import "moment/locale/zh-cn";
import './index.scss'
import { NewComment } from '../../api/Messages'
import { AtMessage } from 'taro-ui'
function MessagesComponents (props) {
  //留言信息
  const [Comment,setComment]=useState({
    content:'',username:'',Avatar:'',url:'',email:'',ArticleId:null,CommentId:null
  })
  useEffect(()=>{
    if(props.ArticleId){
      console.log(props.ArticleId)
      setComment({...Comment,ArticleId:props.ArticleId})
    }
  },[props.ArticleId])
  //提交留言
  const AddComment=async ()=>{
    Taro.login({
      //调用后，无论允许与拒绝授权都会返回code
      success(res){
        //判断是否授权，点击了允许授权才能继续登录
        Taro.getSetting({
          success(authSetting){
            if(authSetting.authSetting['scope.userInfo']){
              //成功授权
              if(res.code){
                //获取微信信息
                Taro.getUserInfo()
                  .then((res)=>{
                    if(!Comment.username||!Comment.content){
                      Taro.atMessage({
                        'message': '必填项不能为空哦!',
                        'type': 'warning',
                      })
                      return
                    }
                    NewComment({...Comment,Avatar:JSON.parse(res.rawData).avatarUrl})
                      .then((res)=>{
                        if(res.data.code===0){
                          setComment({content:'',username:'',Avatar:'',url:'',email:'',CommentId:null})
                          props.GetData()
                          Taro.atMessage({
                            'message': '成功!',
                            'type': 'success',
                          })
                        }else {
                          Taro.atMessage({
                            'message': res.data.mess,
                            'type': 'warning',
                          })
                        }
                      })
                })
              }
            }
          }
        })
      }
    })
  }
  return (
    <View>
      <AtMessage />
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
        <Button className="Button" openType='getUserInfo'
                onGetUserInfo={AddComment}>保存</Button>
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
                <Icon className="cuIcon-comment Icon"
                      onClick={()=>{setComment({...Comment,content:Comment.content+` @ ${Item.username} `})}}
                />
            </View>
          )
        })
      }
    </View>
    </View>
  )
}
MessagesComponents.options={
  addGlobalClass: true
}

export default MessagesComponents
