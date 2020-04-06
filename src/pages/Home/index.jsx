import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image,Icon } from '@tarojs/components'
import { GetReleaseArticle } from '../../api/Home'
import moment from "moment";
import "moment/locale/zh-cn";
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
              Taro.navigateTo({
                url: `/pages/ArticleDetails/index?id=${Item.id}`
              })
            }}>
              <Text className="text-xxl text-bold text-shadow">{Item.title}</Text>
              <Text className="text-black text-df Excerpt text-shadow">{Item.content.replace(/[#\r\n]/g, "").substring(0,100)}...</Text>
              <View className="Icon">
                {/*时间*/}
                <View style={{marginRight:8+'px'}}>
                  <Icon className="cuIcon-time" style={{marginRight:5+'px'}}/>
                  <Text>{moment(Item.createdTime).subtract(10, 'days').calendar()}</Text>
                </View>
                {/*分类*/}
                <View style={{marginRight:8+'px'}}>
                  <Icon className="cuIcon-activity" style={{marginRight:5+'px'}}/>
                  {Item.Categories.map((Items, index) => {
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
                  {Item.Tags.map((Items, index) => {
                    return (
                      <Text key={index} style={{marginRight:3+'px'}}>
                        {Items.TagName}
                      </Text>
                    );
                  })}
                </View>
              </View>
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
