import Taro from '../http/index'

//留言提交
export function NewComment (data) {
  return Taro.request({
    url: '/NewComment',
    method:'POST',
    data
  })
}

//获取博客留言
export function GetComment () {
  return Taro.request({
    url: '/GetComment',
    method:'Get'
  })
}
