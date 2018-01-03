import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

export default class AboutMe extends Component {
    render() {
        return (
            <View>
                <Text>关于我</Text>
            </View>
        );
    }
};
AppRegistry.registerComponent('ReactNativeBlogs', () => AboutMe);