import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import HeadPortrait from './aboutMe/headPortrait';
import MineItem from './aboutMe/mineItem';

const Info = require('./../resources/info.png');
const Sort = require('./../resources/sort.png');
const Theme = require('./../resources/theme.png');
const Collect = require('./../resources/collect.png');
const SystemNews = require('./../resources/syetemNews.png');
const SendAdvice = require('./../resources/sendAdvice.png');
const Setting = require('./../resources/setting.png');

export default class AboutMe extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <HeadPortrait/>
                <View style={styles.itemsContainer}>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem title="个人信息" icon={Info} newsNum="0"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem title="我的分类" icon={Sort} newsNum="1"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem title="我的主题" icon={Theme} newsNum="2"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem title="我的收藏" icon={Collect} newsNum="3"/>
                    </View>
                    <View style={styles.marginRow}>
                        <MineItem title="系统消息" icon={SystemNews} newsNum="4"/>
                    </View>
                </View>
                <View style={[styles.activeContainer, styles.paddingRow]}>
                    <MineItem title="意见反馈" icon={SendAdvice} newsNum="5"/>
                </View>
                <View style={[styles.setting, styles.paddingRow]}>
                    <MineItem title="设置" icon={Setting} newsNum="6"/>
                </View>
            </ScrollView>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eee'
    },
    itemsContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        borderStyle: 'solid',
    },
    marginRow: {        
        marginLeft: 10,
        marginRight: 10,
    },
    paddingRow: {        
        paddingLeft: 10,
        paddingRight: 10,
    },
    activeContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
    setting: {
        width: '100%',
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
    }
})