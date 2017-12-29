import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import Recommend from './find/recommend';
import News from './find/news';
import Technology from './find/technology';
import Funny from './find/funny';
import Auto from './find/auto';
import Sport from './find/sports';

export default class HomeIndex extends Component {
    render() {
        return (<View style={styles.ViewStyle}>
                    <ScrollableTabView 
                        tabBarTextStyle={styles.tabBarTextStyle} 
                        tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
                        tabBarActiveTextColor='#d81e06'
                        tabBarInactiveTextColor='#666666'
                        initialPage={0}  
                    >
                        <Recommend tabLabel='推荐'/>
                        <News tabLabel="时讯"/>
                        <Technology tabLabel='科技'/>
                        <Funny tabLabel="搞笑"/>
                        <Auto tabLabel="汽车"/>
                        <Sport tabLabel="体育"/>
                    </ScrollableTabView>
                </View>
        );
    }
};
//样式列表
const styles = StyleSheet.create({
    ViewStyle:{
        flex: 1,
        height: '100%',
    },
    ScrollableTabView:{
        flexDirection: 'row',
        height: 30,
        backgroundColor:'#fff',
    },
    tabBarTextStyle:{
        fontSize: 13,
        fontWeight: 'normal',
        lineHeight: 25,
    },
    tabBarUnderlineStyle:{
        backgroundColor: '#d81e06',
        height: 1,
    },
})
AppRegistry.registerComponent('ReactNativeBlogs', () => HomeIndex);