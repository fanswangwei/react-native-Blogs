import React from 'react';
// StackNavigator类似顶部导航条，用来跳转页面和传递参数。
// TabNavigator类似底部标签栏，用来区分模块。
import {
    StackNavigator,
    TabNavigator,
    NavigationActions
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

import Recommend from './index/recommend';
import item1 from './index/item1';
import item2 from './index/item2';
import item3 from './index/item3';
import item4 from './index/item4';
import item5 from './index/item5';

// 底部导航
const TabNav = TabNavigator({
    Recommend: {
        screen: Recommend,
        navigationOptions: ({navigation, screenProps}) => ({
            headerStyle: {height: 0},
            tabBarLabel: '推荐',
        }),
    },
    item1: {
        screen: item1,
        navigationOptions: ({navigation, screenProps}) => ({
            headerStyle: {height: 0},
            tabBarLabel: '搞笑',
        }),
    },
    item2: {
        screen: item2,
        navigationOptions: ({navigation, screenProps}) => ({
            headerStyle: {height: 0},
            tabBarLabel: '科技',
        }),
    },
    item3: {
        screen: item3,
        navigationOptions: ({navigation, screenProps}) => ({
            headerStyle: {height: 0},
            tabBarLabel: '汽车',
        }),
    },
    item4: {
        screen: item4,
        navigationOptions: ({navigation, screenProps}) => ({
            headerStyle: {height: 0},
            tabBarLabel: '时讯',
        }),
    },
    item5: {
        screen: item5,
        navigationOptions: ({navigation, screenProps}) => ({
            headerStyle: {height: 0},
            tabBarLabel: '体育',
        }),
    },
}, {
    tabBarPosition: 'top', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: true, // 是否允许在标签之间进行滑动。
    tabBarOptions: {
        activeTintColor: '#d81e06', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor: '#666', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon: false, // 是否显示图标，默认关闭。
        showLabel: true, // android 是否展现文字 默认 true 
        upperCaseLabel: false, //android 文字是否需要大写 默认true 
        pressColor: 'blue', // android 按压时显示的颜色 
        scrollEnabled: false,
        indicatorStyle: {
            height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: { // tabbar的样式。
            height: 45,
            backgroundColor: '#fff',
        },
        tabStyle: { // tab的样式
            height: 45,
        }
    }
});
// 顶部导航
const TextNav = StackNavigator({
    // 对应界面名称
    MainTab: {
        screen: TabNav,
    }
});
export default TextNav;