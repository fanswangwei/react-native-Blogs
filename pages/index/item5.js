import React, {
    Component
} from "react";
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class item5 extends Component {
    render() {
        return (
            <View style={styles.container}><Text>体育</Text></View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})