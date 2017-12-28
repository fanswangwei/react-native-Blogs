import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import IndexPage from './../pages/index/index';
import Recommend from './../pages/index/recommend';
import Technology from './../pages/index/technology';

export default class HomeIndex extends Component {
    render() {
        return (<ScrollableTabView 
                tabBarTextStyle={styles.tabBarTextStyle} 
                tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
                tabBarActiveTextColor='#d81e06'
                tabBarInactiveTextColor='#666666'
                initialPage={0}  
            >
                <IndexPage  tabLabel="首页"/>
                <Recommend tabLabel='推荐'/>
                <Technology tabLabel='科技'/>
            </ScrollableTabView>
        );
    }
};
//样式列表
const styles = StyleSheet.create({
    style:{
        height: 100
    },
    tabBarTextStyle:{
        fontSize: 12,
        fontWeight: 'normal',
    },
    tabBarUnderlineStyle:{
        backgroundColor: '#d81e06',
        height: 1,
    },
})
AppRegistry.registerComponent('ReactNativeBlogs', () => HomeIndex);