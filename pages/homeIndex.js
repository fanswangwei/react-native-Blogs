import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class HomeIndex extends Component {
    render() {
        return (
            <View>
                <Text>首页</Text>
            </View>
        );
    }
};

AppRegistry.registerComponent('ReactNativeBlogs', () => HomeIndex);