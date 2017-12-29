import React from 'react';
// StackNavigator类似顶部导航条，用来跳转页面和传递参数。
// TabNavigator类似底部标签栏，用来区分模块。
import {
    StackNavigator,
    TabNavigator,
    NavigationActions
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Image,
    StyleSheet,
    Text,
    AsyncStorage,
    Button,
    TextInput
} from 'react-native';

import IndexLeft from './../../pages/index/indexLeft';
import IndexRight from './../../pages/index/indexRight';
import Index from './../../pages/findings';
const HeaderInput = ()=>{
    return <TextInput
        placeholder="搜索你想要的"
        underlineColorAndroid='transparent'
        style={styles.NavBarTitle}
        keyboardType='numeric'
        onSubmitEditing={(a)=>{alert(a)}}
    />
}
const headerLeft = NavigationActions.navigate({
    routeName: 'IndexLeft',
    action: NavigationActions.navigate({ routeName: 'IndexLeft'})
})
const headerRight = NavigationActions.navigate({
    routeName: 'IndexRight',
    action: NavigationActions.navigate({ routeName: 'IndexRight'})
})

// 顶部导航
const MyNav = StackNavigator({
    // 对应界面名称
    MyTab: {
        screen: Index,
        navigationOptions:({navigation,screenProps}) => ({
            headerTitle: '首页', 
            headerRight: <Text onPress={()=>{navigation.dispatch(headerRight)}}>右侧</Text>, 
            headerLeft: <Text onPress={()=>{navigation.dispatch(headerLeft)}}>左侧</Text>, 
            headerStyle:{
                backgroundColor:'#fff',
                paddingLeft: 10,
                paddingRight: 10,
            }, 
            headerTitleStyle:{
                fontSize: 15,
                color:'#666',
                alignSelf:'center'
            },
            gesturesEnabled:true,
        })
    },
    IndexLeft: {
        screen: IndexLeft,
        navigationOptions:{
            headerTitle:'IndexLeft',
            headerBackTitle:null,
        }
    },
    IndexRight: {
        screen: IndexRight,
        navigationOptions:{
            headerTitle:'IndexRight',
            headerBackTitle:null,
        }
    },
}, {
    headerMode: 'screen',
});
//样式列表
const styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor:'#ff7f50'
    },
})
export default MyNav;