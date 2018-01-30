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
                    <MineItem style={styles.borderBottom}/>
                    <MineItem style={styles.borderBottom}/>
                    <MineItem style={styles.borderBottom}/>
                    <MineItem style={styles.borderBottom}/>
                    <MineItem/>
                </View>
                <View style={styles.activeContainer}>
                    <MineItem/>
                </View>
                <View style={styles.setting}>
                    <MineItem/>
                    <MineItem/>
                    <MineItem/>
                </View>
            </ScrollView>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    itemsContainer: {
        width: '100%',
        height: 230,
        backgroundColor: '#ffffff',
    },
    borderBottom:{
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        borderStyle: 'solid',
    },
    activeContainer: {
        width: '100%',
        // height: ,
    },
    setting: {
        width: '100%',
        // height: ,
    }
})