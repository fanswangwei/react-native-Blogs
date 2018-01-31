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

const MyRelease = require('./../resources/my-release.png');
const Draft = require('./../resources/draft.png');
const Fans = require('./../resources/fans.png');
const Comment = require('./../resources/comment.png');
const Love = require('./../resources/love.png');
const Share = require('./../resources/share.png');
const Collect = require('./../resources/collect.png');
const Invite = require('./../resources/invite.png');
const CommunityNews = require('./../resources/communityNews.png');

export default class StateNews extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.itemsContainer}>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="我的发布" icon={MyRelease}/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="草稿" icon={Draft}/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="新粉丝" icon={Fans}/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="评论" icon={Comment}/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="喜欢" icon={Love}/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="转载" icon={Share}/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="收藏" icon={Collect}/>
                    </View>
                    <View style={[styles.borderBottom, styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="管理员邀请" icon={Invite}/>
                    </View>
                    <View style={[styles.marginRow, styles.paddingColumn]}>
                        <MineItem title="社区动态" icon={CommunityNews}/>
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