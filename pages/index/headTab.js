import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';

import Recommend from './recommend';
import Item1 from './item1';
import Item2 from './item2';
import Item3 from './item3';
import Item4 from './item4';
import Item5 from './item5';

export default class HeadTab extends Component {
    render() {
        return (<View style={styles.ViewStyle}>
                    <ScrollableTabView 
                        tabBarTextStyle={styles.tabBarTextStyle} 
                        tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
                        tabBarActiveTextColor='#FF7B7B'
                        tabBarInactiveTextColor='#666666'
                        initialPage={0}  
                    >
                        <Recommend tabLabel='推荐'/>
                        <Item1 tabLabel="搞笑"/>
                        <Item2 tabLabel="科技"/>
                        <Item3 tabLabel="汽车"/>
                        <Item4 tabLabel="时讯"/>
                        <Item5 tabLabel="体育"/>
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
    },
    tabBarTextStyle:{
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 25,
    },
    tabBarUnderlineStyle:{
        backgroundColor: '#FF7B7B',
        height: 1,
    },
})