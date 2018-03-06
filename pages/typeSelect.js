import React, {
    Component
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class TypeSelect extends Component {
    constructor(props){
        super(props);
        this.state = {typeList: ['搞笑', '科技', '汽车', '时讯', '体育', '娱乐', '社会', '财经', '军事', '游戏', '国内', '国际', '教育', '房产', '时尚', '历史', '健康', '星座', '家居', '情感', '旅游', '文化', '职场', '法制', '动漫', '育儿', '宠物']} 
    }
    renderList(list){
        return list.map( (item, index) => this.renderItem(item, index) );
    }
    renderItem(item, index) {
        return (
            <View style={styles.type} key={index}>
                <Text  style={styles.text}>{item}</Text>
            </View>
        );
    }
    render() {
        const { typeList } = this.state;
        return (
            <View style={styles.container}>
                {this.renderList(typeList)}
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    type: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        width: 50,
        height: 30,
        alignItems:'center',  
        justifyContent: 'center',
        marginBottom: 6,
        marginRight: 6
    },
    text: {
        color: '#666',
        fontSize: 14
    }
})