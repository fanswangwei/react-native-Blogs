import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';

const ToRight = require('./../../resources/to-right.png');

export default class MainItem extends Component {
	constructor(props){
     	super(props);
     	this.state={
          	title: this.props.title, // 通过props初始化编辑便签子组件的state
          	icon: this.props.icon,
          	newsNum: this.props.newsNum ? this.props.newsNum : 0,
     	}
  	}
	render () {
		return (
			<View style={styles.container}>
                <Image source={this.props.icon} style={styles.icon}/>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={[styles.number, this.props.newsNum > 0 ? styles.newsTips : '']}>{this.props.newsNum}</Text>
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
	newsTips: {
		color: '#d81e06',
	}
})