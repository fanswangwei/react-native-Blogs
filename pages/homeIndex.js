import React, {
    Component
} from "react";
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import ScrollableTabView, {
    ScrollableTabBar,
    DefaultTabBar
} from 'react-native-scrollable-tab-view';

import Recommend from './index/recommend';
import Item1 from './index/item1';
import Item2 from './index/item2';
import Item3 from './index/item3';
import Item4 from './index/item4';
import Item5 from './index/item5';

export default class HomeIndex extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarTextStyle={styles.tabBarTextStyle} 
                tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
                tabBarActiveTextColor='#d81e06'
                tabBarInactiveTextColor='#666666'
                initialPage={0}
                tabBarPosition='top'
                tabBarBackgroundColor='#fdfdfd'
            >
                <Recommend tabLabel='推荐'/>
                <Item1 tabLabel="搞笑"/>
                <Item2 tabLabel="科技"/>
                <Item3 tabLabel="汽车"/>
                <Item4 tabLabel="时讯"/>
                <Item5 tabLabel="体育"/>
            </ScrollableTabView>
        )
    }
}
//样式列表
const styles = StyleSheet.create({
    tabBarTextStyle:{
        fontSize: 13,
        fontWeight: 'normal',
        lineHeight: 20,
    },
    tabBarUnderlineStyle:{
        height: 0,
        backgroundColor: '#d81e06',
    },
})