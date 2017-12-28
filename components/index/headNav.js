import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';


export default class HomeIndex extends Component {
    render() {
        return (
            <ScrollableTabView style={styles.ScrollableTabView} initialPage={0} renderTabBar={() => <ScrollableTabBar />}>
                <Text tabLabel='首页'>My</Text>
                <Text tabLabel='推荐'>My</Text>
                <Text tabLabel='科技'>My</Text>
            </ScrollableTabView>
        );
    }
};
//样式列表
const styles = StyleSheet.create({
    ScrollableTabView:{
        marginTop: 20, 
    },
})