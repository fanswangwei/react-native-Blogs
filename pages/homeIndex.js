import React, {
    Component
} from "react";
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';
import HeadTab from './index/headTab'
export default class HomeIndex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadTab/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})