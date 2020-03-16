import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View,Swiper, SwiperItem,Image } from '@tarojs/components'
import { AtGrid } from "taro-ui"
import './index.scss'

class Home extends Component<Component,any> {
  constructor(prop) {
    super(prop)
    this.state = {
      bannerList: [require('../../images/banner1.png'),require('../../images/banner2.png')],
      gridList: [],
      gridTitleList: ['蔬菜豆制','肉禽蛋','水产海鲜','水果','乳品烘焙','米面粮油','方便速食','酒饮零食','快手菜','邀请有礼']
    }
  }

  componentDidMount() {

  }
  componentWillMount() {
    this.getGridImage()
  }

  getGridImage = () => {
    let imgNameArray: Array<Object> = []
    for (let index = 0; index < 10; index++) {
      const ob = require(`../../images/grid${index+1}.png`)
      imgNameArray.push({
        image: ob,
        value: this.state.gridTitleList[index]
      })
    }
    this.setState({
      gridList: imgNameArray
    })
  }

  renderItem() {
    const {bannerList} = this.state;
    const data = bannerList.map((val: string) => {
      return (
        <SwiperItem className="demo-text-1" key='val'>
          <View className="imgcon">
            <Image className="imagecon" src={val} style='height: 130px;background: #fff;' />
          </View>
        </SwiperItem>
      )
    })
    return data;
  }
  renderGridItem() {
    const {gridList} = this.state
    return <AtGrid
    columnNum={5}
    hasBorder={false}
    data={gridList}
    className="at-grid-style"
  />
  }

  render() {
    return (
      <View>
        <Swiper
            style='height: 130px;background: #fff;'
            className='swiper-con'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            {this.renderItem()}
        </Swiper>
        {this.renderGridItem()}
      </View>
    )
  }
}

export default Home as ComponentType
