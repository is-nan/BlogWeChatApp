import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { GetReleaseArticle } from '../../api/Archive'
import moment from "moment";
import "moment/locale/zh-cn";
import './index.scss'
function Archive(props) {
  // 列表数据
  const [data,setData]=useState([])
  // 年份数据
  const [Year,setYear]=useState([])
  useEffect(()=>{
    GetReleaseArticle()
      .then((res)=>{
        setData(res.data.data)
        setYear(Array.from(new Set(res.data.data.map((Item,index)=>{return Item.createdTime.split('-')[0]}))))
      })
  },[])
  return (
    <View className="Archive">
        {
          Year.map((Item,index)=>{
            return (
              <View className="cu-timeline">
              <View className="cu-time" key={index}>{Item}</View>
                {
                  data.map((Items,index)=>{
                    return (
                      Items.createdTime.includes(Item)?
                        <View className="cu-item" key={Items.id}
                        onClick={()=>{
                          Taro.navigateTo({
                            url: `/pages/ArticleDetails/index?id=${Items.id}`
                          })
                        }}
                        >
                        <View className="content">
                          <View className="cu-tag bg-cyan">
                            {moment(Items.createdTime).format("MMMDo")}
                          </View>
                          <View style={{marginTop:15+'px',color:'#9b9b9b',fontSize:15+'px'}}>
                            {Items.title}
                          </View>
                        </View>
                        </View>:null
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>
  )
}
Archive.options = {
  addGlobalClass: true
}
Archive.config={
  navigationBarTitleText: '归档'
}

export default Archive
