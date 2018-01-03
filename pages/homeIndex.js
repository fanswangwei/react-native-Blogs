import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

import MyNav from "./../components/index/headNav";

export default class HomeIndex extends Component {
    render() {
        return (
            <View style={styles.ViewStyle}>
                <MyNav/>
            </View>
        );
    }
};
//样式列表
const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        height: '100%',
    }
})
AppRegistry.registerComponent('ReactNativeBlogs', () => HomeIndex);