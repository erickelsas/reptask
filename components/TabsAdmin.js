import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StartAuctionScreen from '../screens/StartAuctionScreen';
import ResultAuctionScreen from '../screens/ResultAuctionScreen';
import EditTaskScreen from '../screens/EditTaskScreen';
import AdminHome from '../screens/AdminHome'
import Home from '../screens/Home';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import RankingScreen from '../screens/RankingScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import BidAuctionScreen from '../screens/BidAuctionScreen';
import RequestModalScreen from '../screens/RequestModalScreen';
import { AuctionContext } from '../contexts/AuctionContext';
import React, {useContext} from 'react'
import AwaitingAuctionScreen from './AwaitingAuctionScreen';

const Tab = createBottomTabNavigator();

const icon = (iconName, size, color, colorSelected, focused) => {
    return <Icon name={iconName} size={size} color={focused ? colorSelected:color} style={{height:30}}/>
}

const Tabs = () => {
  return (

    <Tab.Navigator initialRouteName='AdminHome' screenOptions
    ={{tabBarStyle:styles.menu, tabBarHideOnKeyboard:true}} >
      <Tab.Screen name='Start Auction' component={RankingScreen} options={{tabBarLabel:() => null, headerShown:false, tabBarIcon:({focused}) => (
          <TouchableOpacity style={styles.menuIcon}>
         <View style={focused ? styles.backgroundIcon:{}}>
            {icon('rocket', 28, '#202020', '#FFF', focused ? true:false)}
            </View>
          </TouchableOpacity>

      )}} />
     <Tab.Screen name='Auction' component={AwaitingAuctionScreen} options={{tabBarLabel:() => null, headerShown:false, tabBarIcon:({focused}) => (
          <TouchableOpacity style={styles.menuIcon}>
         <View style={focused ? styles.backgroundIcon:{}}>
            {icon('donate', 28, '#202020', '#FFF', focused? true:false)}
          </View>
          </TouchableOpacity>
      )}}/>

      <Tab.Screen name='Add Task' component={AddTaskScreen} options={{tabBarLabel:() => null, headerShown:false, tabBarIcon:({focused}) => (
            <TouchableOpacity style={styles.menuIcon}>
              <View style={focused ? styles.backgroundIcon:{}}>
                {icon('plus', 28, '#202020', '#FFF', focused ? true:false)}
              </View>
            </TouchableOpacity>
      )}}/>
      <Tab.Screen name='AdminHome' component={AdminHome} options={{tabBarLabel:() => null, headerShown:false, tabBarIcon:({focused}) => (
            <TouchableOpacity style={styles.menuIcon}>
              <View style={focused ? styles.backgroundIcon:{}}>
                {icon('home', 28, '#202020', '#FFF', focused ? true:false)}  
              </View>
            </TouchableOpacity>
      )}}/>
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
    menu:{
        backgroundColor: '#E7E7E7',
        position: 'relative',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor:'#000',
        elevation: 20,
        height:'7.5%'
    },
    backgroundIcon:{
        padding: 16,
        backgroundColor: '#2E3E75',
        borderRadius: 12,
        position: 'absolute',
        transition: 'all 0.3s ease-in-out'
    },
    menuIcon:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.25,
        elevation:60,
        zIndex:1,
    },
})