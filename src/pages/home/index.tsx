import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View,Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'


class Home extends Component<Component,any> {
  constructor(prop) {
    super(prop)
    this.state = {
      bannerList: ['1','2','3']
    }
  }

  rendeItem() {
    const {bannerList} = this.state;
    const data = bannerList.map((num: string) => {
      return (
        <SwiperItem>
          <View className="demo-text-1">
            {num}
          </View>
        </SwiperItem>
      )
    })
    return data;
  }

  render() {
    return (
      <View>
        <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            {this.rendeItem()}
        </Swiper>
      </View>
    )
  }
}

export default Home as ComponentType
