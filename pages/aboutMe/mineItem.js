import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';

const Setting = require('./../../resources/setting.png');
const ToRight = require('./../../resources/to-right.png');

export default class HeadPortrait extends Component {
	render () {
		return (
			<View style={styles.container}>
                <Image source={Setting} style={styles.icon}/>
                <Text style={styles.title}>公开博文</Text>
                <Text style={styles.number}>1</Text>
                <Image source={ToRight}  style={styles.toDetail}/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		height: 30,
		marginTop: 15,
        position: 'relative',
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        borderStyle: 'solid',
        marginLeft: 10,
        marginRight: 10,
	},
	icon: {
		width: 15,
		height: 15,
		position: 'absolute',
		top: 0.5,
		left: 10,
	},
	title: {
		marginLeft: 20,
		position: 'absolute',
		top: -2,
		left: 20,
	},
	number: {
		width: '10%',
		position: 'absolute',
		top: -2,
		right: 20,
	},
	toDetail: {
		width: 15,
		height: 15,
		position: 'absolute',
		top: 0.5,
		right: 10,
	},
})