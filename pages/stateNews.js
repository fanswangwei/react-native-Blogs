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

import MineItem from './aboutMe/mineItem';
export default class StateNews extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.itemsContainer}>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="我的发布"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="草稿"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="新粉丝"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="评论"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="喜欢"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="转载"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="收藏"/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="管理员邀请"/>
                    </View>
                    <View style={[styles.marginRow, styles.paddingColumn]}>
                        <MineItem props="其他动态"/>
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eee',
    },
    itemsContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        marginBottom: 3,
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
    paddingColumn: {
        paddingVertical: 5
    },
})