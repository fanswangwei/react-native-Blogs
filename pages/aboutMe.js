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

export default class AboutMe extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <HeadPortrait/>
                <View style={styles.itemsContainer}>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem props="个人信息"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem props="我的分类"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem props="我的主题"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow]}>
                        <MineItem props="我的收藏"/>
                    </View>
                    <View style={styles.marginRow}>
                        <MineItem props="系统消息"/>
                    </View>
                </View>
                <View style={[styles.activeContainer, styles.paddingRow]}>
                    <MineItem props="意见反馈"/>
                </View>
                <View style={[styles.setting, styles.paddingRow]}>
                    <MineItem props="设置"/>
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