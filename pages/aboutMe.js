import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

import HeadPortrait from './aboutMe/headPortrait';
import MineItem from './aboutMe/mineItem';

export default class AboutMe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadPortrait/>
                <View style={styles.itemsContainer}>
                    <MineItem/>
                    <MineItem/>
                    <MineItem/>
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
})