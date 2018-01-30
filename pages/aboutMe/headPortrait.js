import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';


const HeadImg = require('./../../resources/head.jpg');
const HeadImgBG = require('./../../resources/head-bg.jpg');

export default class HeadPortrait extends Component {
	render () {
		return (
			<View style={styles.container}>
                <ImageBackground style={styles.imageBg} source={HeadImg}>
                	<Image style={styles.image} source={HeadImg} />
                	<Text style={styles.nameText}>fans_wangwei@163.com</Text>
                	<View style={[styles.textContainer]}>
	                	<Text style={[styles.attention]}>关注   0</Text>
	                	<Text style={[styles.fans]}>粉丝   0</Text>
                	</View>
                </ImageBackground>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBg: {
		width: '100%',
		height: 200,
		overflow: 'hidden', 
	},	
	image: {
		width: 90,
		height: 90,
		borderRadius: 45,
		marginTop: 15,
		marginLeft: 'auto', 
		marginRight: 'auto', 
		overflow: 'hidden', 
		marginBottom: 10,
	},	
	nameText: {
		fontSize: 15,
		textAlign: 'center', 
	},
	textContainer: {
		flex: 1,
		height: 30,
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 15,
	},
	attention: {
		width: '50%',
		height: 20,
		textAlign: 'center',
		borderRightWidth: 1,
        alignItems: 'center', 
		borderColor: '#d81e06',
		borderStyle: 'solid',
	},
	fans: {
		width: '50%',
		height: 20,
        alignItems: 'center', 
		textAlign: 'center',
	},
})