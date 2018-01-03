import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

export default class StateNews extends Component {
    render() {
        return (
            <View>
                <Text>动态</Text>
            </View>
        );
    }
};

AppRegistry.registerComponent('ReactNativeBlogs', () => StateNews);