import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './index.scss'


class Home extends Component {
  constructor() {
    super(...arguments)

  }
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View>
        ss
      </View>
    )
  }
}

export default Home  as ComponentType
