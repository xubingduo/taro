import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTabBar }  from 'taro-ui'
import './index.scss'
import Home from '../home/index'
import Catory from '../catory/index'
import Shop from '../shop/index'
import User from '../user/index'
let tabList = [
  { title: '首页', iconType: 'home', text: ''},
  { title: '分类', iconType: 'list'},
  { title: '购物车', iconType: 'shopping-bag-2'},
  { title: '我的', iconType: 'user'}
]

@inject('counterStore')
@observer
class Index extends Component<Component, any> {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */


  handleClick = (value: number) => {
    console.log(value);

    this.setState({
      current: value
    })
  }
  componentDidMount = () => {
    Taro.setNavigationBarTitle({
      title: tabList[this.state.current].title
    })
  }
  componentDidUpdate = () => {
    Taro.setNavigationBarTitle({
      title: tabList[this.state.current].title
    })
  }
  render () {
    return (
      <View className='index'>
        {this.state.current === 0 && <Home/>}
        {this.state.current === 1 && <Catory/>}
        {this.state.current === 2 && <Shop/>}
        {this.state.current === 3 && <User/>}
        <AtTabBar
          fixed
          backgroundColor='#fff'
          color='#333'
          selectedColor='#9acd32'
          fontSize={12}
          iconSize={20}
          tabList={tabList}
          onClick={this.handleClick}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index  as ComponentType
