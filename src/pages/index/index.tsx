import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTabBar }  from 'taro-ui'
import './index.scss'
import Home from '../home/index'

@inject('counterStore')
@observer
class Index extends Component<any, any> {
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
    // 跳转到目的页面，在当前页面打开
    // Taro.redirectTo({
    //   url: '/pages/home/index'
    // })
  }
  render () {
    return (
      <View className='index'>


        <AtTabBar
        fixed
          backgroundColor='#fff'
          color='#333'
          selectedColor='#9acd32'
          fontSize={12}
          iconSize={20}
          tabList={[
            { title: '首页', iconType: 'home', text: ''},
            { title: '分类', iconType: 'list'},
            { title: '购物车', iconType: 'shopping-bag-2'},
            { title: '我的', iconType: 'user'}
          ]}
          onClick={this.handleClick}
          current={this.state.current}
        />

      </View>
    )
  }
}

export default Index  as ComponentType
