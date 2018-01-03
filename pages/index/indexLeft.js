import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

export default class IndexLeft extends Component {
    render() {
        return (
            <View>
                <Text>左侧</Text>
            </View>
        );
    }
};
AppRegistry.registerComponent('ReactNativeBlogs', () => IndexLeft);