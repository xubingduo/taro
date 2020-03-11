import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'

import './index.scss'

class Shop extends Component<any,any> {
  constructor() {
    super(...arguments)

  }

  render() {
    return (
      <View>
        <Text>shop</Text>

      </View>
    )
  }
}

export default Shop as ComponentType
