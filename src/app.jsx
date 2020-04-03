import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import './assets/css/animation.css'
import './assets/css/main.css'
import './assets/css/icon.css'
import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/Home/index',
      'pages/ArticleDetails/index',
      'pages/Archive/index',
      'pages/My/index',
      'pages/Messages/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '南岸有归的博客',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#bfbfbf",
      selectedColor: "#1296db",
      borderStyle:"white",
      list: [{
        "selectedIconPath": "assets/images/Home-Active.png",
        "iconPath": "assets/images/Home-.png",
        "pagePath": "pages/Home/index",
        "text": "首页"
      }, {
        "selectedIconPath": "assets/images/Archive-Active.png",
        "iconPath": "assets/images/Archive-.png",
        "pagePath": "pages/Archive/index",
        "text": "归档"
      }, {
        "selectedIconPath": "assets/images/My-Active.png",
        "iconPath": "assets/images/My-.png",
        "pagePath": "pages/My/index",
        "text": "关于"
      },
        {
          "selectedIconPath": "assets/images/Messages-Active.png",
          "iconPath": "assets/images/Messages-.png",
          "pagePath": "pages/Messages/index",
          "text": "留言"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
