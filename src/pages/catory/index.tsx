import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import { AtTabs, AtTabsPane,AtSearchBar } from 'taro-ui'
import './index.scss'

class Catory extends Component<any,any> {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabs: [{ title: '绿卡专享' },
      { title: '快手菜' },
      { title: '新鲜水果' },
      { title: '肉乳蛋' },
      { title: '海鲜水禽' },
      { title: '乳品烘焙' },
      { title: '营养早餐' },
      { title: '熟食卤味' },
      { title: '方便速食' },
      { title: '产地直采' },
      { title: '米面粮油' },
      { title: '调味品' },
      { title: '酒水饮料' },
      { title: '休闲食品' },
      { title: '南北干货' },
      { title: '宝宝餐' },
      { title: '厨房用品' },
      { title: '乳品烘焙' }],
      searchValue: '',
      tabsContentList: [{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      },{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      },{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      },{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      },{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      },{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      },{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      },{
        img: require('../../images/dong.png'),
        title: '冬笋 约600克',
        des: '深山现挖 脆嫩爽口 蔬中一绝',
        vipPrice: '9.90',
        price: '13.90'
      }]
    }
  }

  componentWillMount() {
    console.log('ss',Taro.createSelectorQuery())
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  onChange (value) {
    this.setState({
      searchValue: value
    })
  }

  renderTabsItem() {
    const {tabsContentList} = this.state
    var data = tabsContentList.map((item,index)=>{
      return (
        <View className="tabs_content">
          <Image className="img_main" src={require('../../images/dong.png')}/>
          <View className="tabs_content_main">
            <View className="main_top">
              <Text className="title_main">{item.title}</Text>
              <Text className="title_des">{item.des}</Text>
            </View>
            <View className="tabs_content_bottom">
              <Text className="bottom_price">¥ {item.price}</Text>
              <Image className="img_shop" src={require('../../images/shopcar.png')}/>
            </View>
          </View>
        </View>
      )
    })
    return (
      <View>
        {data}
      </View>
    )
  }

  renderMain() {
    const {tabs,current} = this.state
    var data = tabs.map((item,index)=>{
      return (
        <AtTabsPane tabDirection='vertical' current={current} index={index}>
          {this.renderTabsItem()}
        </AtTabsPane>
      )
    })
    return (
      <AtTabs
      current={current}
      height='400px'
      tabDirection='vertical'
      scroll
      tabList={tabs}
      onClick={this.handleClick.bind(this)}
      className="attabs_costom">
        {data}
      </AtTabs>
    )
  }

  renderSearch() {
    const {searchValue} = this.state
    return (
      <AtSearchBar
        value={searchValue}
        onChange={this.onChange.bind(this)}
        className="at_search_custom"
        placeholder='请输入商品名称'
      />
    )
  }


  render() {
    return (
      <View className="box">
        {this.renderSearch()}
        {this.renderMain()}

      </View>
    )
  }
}

export default Catory as ComponentType
