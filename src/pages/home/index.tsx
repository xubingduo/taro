import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'

import './index.scss'


class Home extends Component<Component,any> {
  constructor() {
    super(...arguments)

  }
  render() {
    return (
      <View>
        <Text>ww</Text>
      </View>
    )
  }
}

export default Home as ComponentType
