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

import HomeIndex from './pages/homeIndex';
import TypeSelect from './pages/typeSelect';
import StateNews from './pages/stateNews';
import AboutMe from './pages/aboutMe';

const indexIcon = require('./resources/index.png');
const findIcon = require('./resources/sort.png');
const stateIcon = require('./resources/state.png');
const me = require('./resources/me.png');
const indexIconActive = require('./resources/index-active.png');
const findIconActive = require('./resources/sort-active.png');
const stateIconActive = require('./resources/state-active.png');
const meActive = require('./resources/me-active.png');

const HeaderInput = ()=>{
    return <TextInput
        placeholder="搜索你想要的"
        underlineColorAndroid='transparent'
        style={styles.NavBarTitle}
        keyboardType='numeric'
        onSubmitEditing={(a)=>{alert(a)}}
    />
}

// 底部导航
const TabNav = TabNavigator({
    HomeIndex: {
        screen: HomeIndex,
        navigationOptions: ({navigation, screenProps}) => ({
            // headerTitle: '首页',
            headerStyle: {height: 0},
            // headerStyle: {height: 45, borderBottomWidth: 1, borderStyle: 'solid', borderColor: '#FF7B7B', },
            headerTitleStyle: {fontSize: 14, color:'#FF7B7B', fontWeight: 'normal', marginLeft: 'auto', marginRight: 'auto' },
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => { // tintColor激活前后的颜色，focused激活状态
                return (
                    <Image
                        source={!focused ? indexIcon : indexIconActive}
                    />
                )
            }
        }),
    },
    TypeSelect: {
        screen: TypeSelect,
        // navigationOptions: () => TabOptions('发现', findIcon, findIconActive),
        navigationOptions: ({navigation, screenProps}) => ({
            headerTitle: '定制分类',
            headerStyle: {height: 45, borderBottomWidth: 1, borderStyle: 'solid', borderColor: '#FF7B7B', backgroundColor: '#fdfdfd'},
            headerTitleStyle: {fontSize: 14, color:'#FF7B7B', fontWeight: 'normal', marginLeft: 'auto', marginRight: 'auto' },
            tabBarLabel: '分类',
            tabBarIcon: ({tintColor, focused}) => { // tintColor激活前后的颜色，focused激活状态
                return (
                    <Image
                        source={!focused ? findIcon : findIconActive}
                    />
                )
            }
        }),
    },
    StateNews: {
        screen: StateNews,
        // navigationOptions: () => TabOptions('动态', stateIcon, stateIconActive),
        navigationOptions: ({navigation, screenProps}) => ({
            headerTitle: '消息动态',
            headerStyle: {height: 45, borderBottomWidth: 1, borderStyle: 'solid', borderColor: '#FF7B7B', backgroundColor: '#fdfdfd'},
            headerTitleStyle: {fontSize: 14, color:'#FF7B7B', fontWeight: 'normal', marginLeft: 'auto', marginRight: 'auto' },
            tabBarLabel: '动态',
            tabBarIcon: ({tintColor, focused}) => { // tintColor激活前后的颜色，focused激活状态
                return (
                    <Image
                        source={!focused ? stateIcon : stateIconActive}
                    />
                )
            }
        }),
    },
    AboutMe: {
        screen: AboutMe,
        // navigationOptions: () => TabOptions('我', meIcon, meIconActive),
        navigationOptions: ({navigation, screenProps}) => ({
            // headerTitle: '我的',
            headerStyle: {height: 0},
            // headerTitleStyle: {fontSize: 14, color:'#FF7B7B', fontWeight: 'normal', marginLeft: 'auto', marginRight: 'auto' },
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => { // tintColor激活前后的颜色，focused激活状态
                return (
                    <Image
                        source={!focused ? me : meActive}
                    />
                )
            }
        }),
    },
}, {
    initialRouteName: 'AboutMe', // 默认显示界面  initialRouteName - 首次加载时初始标签路由的routeName
    tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: false, // 是否允许在标签之间进行滑动。
    animationEnabled: true, // 是否在更改标签时显示动画。
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#FF7B7B', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor: '#666', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon: true, // 是否显示图标，默认关闭。
        showLabel: true, // android 是否展现文字 默认 true 
        upperCaseLabel: false, //android 文字是否需要大写 默认true 
        pressColor: 'blue', // android 按压时显示的颜色 
        scrollEnabled: false,
        indicatorStyle: {
            height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: { // tabbar的样式。
            height: 50,
            backgroundColor: '#fdfdfd',
            borderTopWidth: 0.7,
            borderTopColor: '#eee',
            borderStyle: 'solid',
        },
        labelStyle: { // label的样式
            height: 20,
            fontSize: 14,
            fontFamily: 'KaiTi',
        },
        iconStyle: {
            width: 20,
            position: 'relative',
            top: 10
        },
        tabStyle: { // tab的样式
            height: 50,
        }
    }
});
// 顶部导航
const MyNav = StackNavigator({
    // 对应界面名称
    MainTab: {
        screen: TabNav,
    },
    HomeIndex: {
        screen: HomeIndex,
    },
    TypeSelect: {
        screen: TypeSelect,
    },
    StateNews: {
        screen: StateNews,
    },
    AboutMe: {
        screen: AboutMe,
    },
},{
    initialRouteName: 'MainTab', // 默认显示界面
});
//样式列表
const styles = StyleSheet.create({
    NavBarTitle:{
        borderWidth:1,
        borderColor:'#FF7B7B',
        width:'80%',
        borderRadius:20,
        height:30,
        paddingHorizontal:15,
        paddingVertical:0,
        fontSize:12,
        alignSelf:'center'
    },
})
export default MyNav;