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

export default class MainItem extends Component {
	render () {
		return (
			<View style={styles.container}>
                <Image source={Setting} style={styles.icon}/>
                <Text style={styles.title}>个人信息</Text>
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
	},
	icon: {
		width: 15,
		height: 15,
		position: 'absolute',
		top: 0.5,
		left: 3,
	},
	title: {
		fontSize: 14,
		marginLeft: 20,
		position: 'absolute',
		top: -2,
		left: 13,
	},
	number: {
		width: '10%',
		position: 'absolute',
		top: -2,
		right: 13,
	},
	toDetail: {
		width: 15,
		height: 15,
		position: 'absolute',
		top: 0.5,
		right: 3,
	},
})