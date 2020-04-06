import Taro from '../http/index'

//获取分类列表
export function GetCategoryList () {
  return Taro.request({
    url: '/GetCategoryList',
    method:'GET'
  })
}

//获取标签列表
export function GetTagList () {
  return Taro.request({
    url: '/GetTagList',
    method:'GET'
  })
}
