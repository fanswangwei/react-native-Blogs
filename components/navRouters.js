import React from 'react';
// StackNavigator类似顶部导航条，用来跳转页面和传递参数。
// TabNavigator类似底部标签栏，用来区分模块。
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Image,
    StyleSheet,
    Text,
    AsyncStorage,
    Button,
    TextInput
} from 'react-native';

import HomeIndex from './../pages/homeIndex';
import Findings from './../pages/findings';
import StateNews from './../pages/stateNews';
import AboutMe from './../pages/aboutMe';

const indexIcon = require('./../resources/index.png');
const findIcon = require('./../resources/find.png');
const stateIcon = require('../resources/state.png');
const meIcon = require('./../resources/me.png');
const indexIconActive = require('./../resources/index-active.png');
const findIconActive = require('./../resources/find-active.png');
const stateIconActive = require('./../resources/state-active.png');
const meIconActive = require('./../resources/me-active.png');

// 底部导航
const TabNav = TabNavigator({
    HomeIndex: {
        screen: HomeIndex,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon:({tintColor,focused})=> {   // tintColor激活前后的颜色，focused激活状态
                return(
                    <Image
                        source={!focused ? indexIcon : indexIconActive}
                    />
                )
            }
        },
    },
    Findings: {
        screen: Findings,
        navigationOptions: ()=> TabOptions('发现',findIcon,findIconActive),
    },
    StateNews:{
        screen: StateNews,
        navigationOptions: ()=> TabOptions('动态',stateIcon,stateIconActive),
    },    
    AboutMe:{
        screen: AboutMe,
        navigationOptions: ()=> TabOptions('我',meIcon,meIconActive),
    },
},{
    tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName: '', // 设置默认的页面组件
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions :{
        activeTintColor:'#d81e06', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor:'#666', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon :true, // 是否显示图标，默认关闭。
        showLabel: true, // android 是否展现文字 默认 true 
        upperCaseLabel : false, //android 文字是否需要大写 默认true 
        pressColor : 'blue', // android 按压时显示的颜色 
        scrollEnabled : false,
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {    // tabbar的样式。
            height: 50,
            backgroundColor: '#fff',
        },
        labelStyle: {   // label的样式
            height: 20,
            fontSize: 14,
            fontFamily: 'KaiTi',
        },
        iconStyle: {
            width: 20,
            position: 'relative',
            top: 10
        },
        tabStyle:{  // tab的样式
            height: 50,
        }
    }
});
const TabOptions = (tabBarTitle,normalImage,selectedImage) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {   // tintColor激活前后的颜色，focused激活状态
        return(
            <Image
                source={!focused ? normalImage : selectedImage}
            />
        )
    });
    return {tabBarLabel,tabBarIcon};
};
export default TabNav;