import Taro from '../http/index'

//获取文章详情
export function GetArticleDetails (id) {
  return Taro.request({
    url: '/GetArticleDetails',
    method:'POST',
    data:{id}
  })
}
