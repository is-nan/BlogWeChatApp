import Taro from '../http/index'

//获取已发布的文章
export function GetReleaseArticle () {
  return Taro.request({
    url: '/GetReleaseArticle',
    method:'GET'
  })
}
