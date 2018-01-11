import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class AboutMe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>关于我</Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})