import Taro from '@tarojs/taro'

const interceptor = function (chain) {
  const requestParams = chain.requestParams
  //定义请求地址
  requestParams.url=`https://www.nanbk.com/api${chain.requestParams.url}`
  //定义请求头
  requestParams.header={
    'content-type': 'application/json',
    //后端token验证
    // 'token':'0dc8c1f2a87c463baa9d500890c11d19'
    // 'token':Taro.getStorageSync('sessionid')
  }
  // const { method, data, url } = requestParams
  // console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams)
    .then(res => {
      // console.log(`http <-- ${url} result:`, res)
      return res
    })
}
// const url='http://10.10.11.13/api'
Taro.addInterceptor(interceptor)
// Taro.request( url )

export default Taro
