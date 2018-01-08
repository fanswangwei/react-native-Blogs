import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class TypeSelect extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>请选择自己感兴趣的分类</Text>
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