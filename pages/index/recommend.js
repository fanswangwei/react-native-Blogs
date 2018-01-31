import React, {
    Component
} from "react";
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Recommend extends Component {
    render() {
        return (
            <View style={[styles.container, {backgroundColor:'#ffffff'}]}><Text>推荐</Text></View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})