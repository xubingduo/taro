import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'

import './index.scss'

class User extends Component<any,any> {
  constructor() {
    super(...arguments)

  }

  render() {
    return (
      <View>
        <Text>user</Text>

      </View>
    )
  }
}

export default User as ComponentType
