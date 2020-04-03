import Taro, { useState,useEffect } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { GetArticleDetails } from "../../api/ArticleDetails";
import './index.scss'
import TaroParser from 'taro-parse'
function ArticleDetails(props) {
  const [data,setData]=useEffect({})
  useEffect(()=>{
    GetArticleDetails(this.$router.params.id)
      .then((res)=>{
        setData(res.data.data.Article[0])
      })

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
      <TaroParser
        type='markdown'
        theme='light'
        onImgClick={imgClick}
        onLinkClick={linkClick}
        yumlApi='https://md.werfei.com/?yuml'
        latexApi='https://md.werfei.com/?tex'
        content={data.content}
      />
    </View>
  )
}
ArticleDetails.options = {
  addGlobalClass: true
}
export default ArticleDetails
