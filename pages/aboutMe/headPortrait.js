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
                	<View style={styles.mask}></View>
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
		position: 'relative',  
	},
	mask: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		opacity: 0.7,
		backgroundColor: '#ccc'
	},
	image: {
		position: 'absolute',
		width: 90,
		height: 90,
		borderRadius: 45,
		top: 15,
		left: '50%',
		marginLeft: -45,  
		overflow: 'hidden',
	},	
	nameText: {
		position: 'absolute',
		width: '100%',
		fontSize: 15,
		top: 115,
		left: 0,
		textAlign: 'center',
	},
	textContainer: {
		position: 'absolute',
		top: 150,
		flex: 1,
		height: 30,
        flexDirection: 'row',
        alignItems: 'center',
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