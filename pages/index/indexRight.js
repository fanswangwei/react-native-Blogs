import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class IndexRight extends Component {
    render() {
        return (
            <View>
                <Text>右侧</Text>
            </View>
        );
    }
};
AppRegistry.registerComponent('ReactNativeBlogs', () => IndexRight);