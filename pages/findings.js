import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class Findings extends Component {
    render() {
        return (
            <View>
                <Text>发现</Text>
            </View>
        );
    }
};

AppRegistry.registerComponent('ReactNativeBlogs', () => Findings);