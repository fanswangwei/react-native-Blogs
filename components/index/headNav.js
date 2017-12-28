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

import Index from "./../../pages/index/index.js";
import Recommend from "./../../pages/index/recommend.js";
import Technology from "./../../pages/index/technology.js";

// 初始化StackNavigator
const HeadNav = StackNavigator({
    // 将需要跳转的页面注册在这里，全局才可以跳转
    Index:{
        screen:Index
    },
    Recommend:{
        screen:Recommend,
    },
    Technology:{
        screen:Technology
    }
},{

});
export default HeadNav;