import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class StateNews extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>动态</Text>
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