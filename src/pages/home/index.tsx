import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View,Swiper, SwiperItem,Image,Text } from '@tarojs/components'
import { AtGrid,AtCountdown } from "taro-ui"
import './index.scss'
class Home extends Component<Component,any> {
  constructor(prop) {
    super(prop)
    this.state = {
      bannerList: [require('../../images/banner1.png'),require('../../images/banner2.png')],
      gridList: [],
      gridTitleList: ['蔬菜豆制品','肉禽蛋','水产海鲜','水果','乳品烘焙','米面粮油','方便速食','酒饮零食','快手菜','邀请有礼'],
      discountItems: [{
        img: require('../../images/discount1.png'),
        title: '海南芒果2个 约500g',
        vipPrive: '9.90',
        price: '13.80'
      },{
        img: require('../../images/discount2.png'),
        title: '海南芒果2个 约500g',
        vipPrive: '9.90',
        price: '13.80'
      },{
        img: require('../../images/discount3.png'),
        title: '海南芒果2个 约500g',
        vipPrive: '9.90',
        price: '13.80'
      },{
        img: require('../../images/discount1.png'),
        title: '海南芒果2个 约500g',
        vipPrive: '9.90',
        price: '13.80'
      },{
        img: require('../../images/discount2.png'),
        title: '海南芒果2个 约500g',
        vipPrive: '9.90',
        price: '13.80'
      }]
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
            <Image className="imagecon" src={val} style='height: 260rpx;background: #fff;width:100%' />
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
    className="asee"
  />
  }

  //标题
  renderAddtimeItem() {
    return (
      <View className="add_time_view">
        <View className="time_line" />
        <View className="time_content">
          <View className="time_content1">
            <Text className="time_title">限时抢购</Text>
            <AtCountdown
                isShowDay
                format={{ hours: ':', minutes: ':', seconds: '' }}
                day={2}
                hours={1}
                minutes={1}
                seconds={10}
            />
          </View>
          <Text className="time_more">更多</Text>
        </View>

      </View>
    )
  }
  // 折扣
  renderDiscountItems() {
    return (
      <View className="discountview">
        {this.renderDiscountItem()}
      </View>
    )
  }
  //折扣item
  renderDiscountItem() {
    const {discountItems} = this.state
    const data = discountItems.map(item=>{
      return (
        <View className="itemview">
          <Image className="itemview_img" src={item.img}/>
          <Text className="item_title">{item.title}</Text>
          <View className="item_bottom_content">
            <View className="bottom_titles">
              <Text className="item_vip_prive">¥ {item.vipPrive}</Text>
              <Text className="item_prive">¥ {item.price}</Text>
            </View>
            <Image style="height: 20px;width: 20px" src={require("../../images/shopcar.png")}/>
          </View>
        </View>
      )
    })
    return data
  }

  //标题
  renderLikeTitle() {
    return (
      <View className="add_time_view">
        <View className="time_line" />
        <View className="time_content">
          <View className="time_content1">
            <Text className="time_title">猜你喜欢</Text>
          </View>
        </View>
      </View>
    )
  }

  renderLikeItems() {
    var items = [1,2,3,4,5,6,7].map(()=>{
      return (
        <View className="like_content">
          <Image className="like_img" src={require('../../images/egg.png')}/>
          <Text className="like_title">土鸡蛋0枚</Text>
          <View className="like_bottom">
            <View className="bottom_titles">
              <Text className="vip_price_title">¥ 6.90</Text>
              <Text className="price_title">¥ 8.90</Text>
            </View>
            <Image style="height: 20px;width: 20px" src={require("../../images/shopcar.png")}/>
          </View>
        </View>
      )
    })

    return (
      <View className="like">
        <View className="likess">
          {items}
        </View>
        <View className="like_footer">
          <Text className="footer_name"> —— 叮咚买菜 —— </Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View className='backview'>
        <Swiper
            style='height: 260rpx;background: #fff;'
            className='swiper-con'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            {this.renderItem()}
        </Swiper>
        {this.renderGridItem()}
        {this.renderAddtimeItem()}
        {this.renderDiscountItems()}
        {this.renderLikeTitle()}
        {this.renderLikeItems()}
      </View>
    )
  }
}

export default Home as ComponentType
