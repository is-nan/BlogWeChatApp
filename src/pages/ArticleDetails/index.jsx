import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text, Image, Icon } from '@tarojs/components'
import { GetArticleDetails,GetArticleComment } from "../../api/ArticleDetails";
import './index.scss'
import moment from "moment";
import "moment/locale/zh-cn";
import TaroParser from 'taro-parse'
import MessagesComponents from "../../components/MessagesComponents";
function ArticleDetails (props) {
  //文章详情数据
  const [data,setData]=useState({})
  //文章评论数据
  const [MessList,setMessList]=useState([])
  const GetMess=()=>{
    GetArticleComment(this.$router.params.id)
      .then((res)=>{
        setMessList(res.data.data)
      })
  }
  useEffect(()=>{
    GetArticleDetails(this.$router.params.id)
    // this.$router.params.id
      .then((res)=>{
        setData(res.data.data.Article[0])
        Taro.setNavigationBarTitle({title:res.data.data.Article[0].title})
      })
    GetMess()
  },[])
  const imgClick = (src) => {
    Taro.previewImage({urls: [src]}).then(() => {
    })
  }
  const linkClick = (href) => {
    Taro.setClipboardData({data: href}).then(() => {
      Taro.showToast({title: '链接已复制'}).then(() => {
      })
    })
  }
  return (
    <View className='index'>
      <View className="ArticleDetails">
        <Text className="text-black text-bold text-xxl text-center Title">{data.title}</Text>
      </View>
      <TaroParser
        type='markdown'
        theme='light'
        onImgClick={imgClick}
        onLinkClick={linkClick}
        yumlApi='https://md.werfei.com/?yuml'
        latexApi='https://md.werfei.com/?tex'
        content={data.content}
      />
      <View className="Icon">
        {/*时间*/}
        <View style={{marginRight:8+'px'}}>
          <Icon className="cuIcon-time" style={{marginRight:5+'px'}}/>
          <Text>{moment(data.createdTime).subtract(10, 'days').calendar()}</Text>
        </View>
        {/*分类*/}
        <View style={{marginRight:8+'px'}}>
          <Icon className="cuIcon-activity" style={{marginRight:5+'px'}}/>
          {data.Categories.map((Items, index) => {
            return (
              <Tetx key={index} style={{marginRight:3+'px'}}>
                {Items.CategoryName}
              </Tetx>
            );
          })}
        </View>
        {/*标签*/}
        <View style={{marginRight:8+'px'}}>
          <Icon className="cuIcon-tag" style={{marginRight:5+'px'}}/>
          {data.Tags.map((Items, index) => {
            return (
              <Text key={index} style={{marginRight:3+'px'}}>
                {Items.TagName}
              </Text>
            );
          })}
        </View>
      </View>
      <Text className="text-black text-bold text-xxl MessListName">文章评论</Text>
      <MessagesComponents data={MessList} ArticleId={data.id} GetData={GetMess}/>
    </View>
  )
}
ArticleDetails.options = {
  addGlobalClass: true
}
export default ArticleDetails
