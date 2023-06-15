import { StyleSheet, Text, View, TouchableOpacity, Animated, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Menu = () => {
    const {width} = useWindowDimensions();

    const [left, setLeft] = useState(width * 0.095);
    const [selected, setSelected] = useState('home');

    const [moveAnimation] = useState(new Animated.Value(width * 0.095));



    useEffect(() => {
        Animated.timing(
            moveAnimation,
            {
                toValue:left,
                duration: 300,
                useNativeDriver: false,
            }
        ).start();        
    }, [left]);

    useEffect(() => {
        if(selected == 'podium'){
            setLeft(width * 0.095);
        }

        if(selected == 'auction'){
            setLeft(width * 0.32);
        }

        if(selected == 'more'){
            setLeft(width * 0.5425);
        }

        if(selected == 'home'){
            setLeft(width * 0.7725);
        }
    }, [selected])

    const icon = (iconName, size, color, colorSelected, selected) => {
        return <Icon name={iconName} size={size} color={selected ? colorSelected:color}/>
    }

    return (
    <View style={styles.menu}>
        <TouchableOpacity style={styles.menuIcon} onPress={() => {setSelected('podium')}}>
            {icon('rocket', 28, '#333', '#E7E7E7', selected == 'podium' ? true:false)}
      </TouchableOpacity>
      <TouchableOpacity  style={styles.menuIcon} onPress={() => {setSelected('auction')}}>
            {icon('donate', 28, '#333', '#E7E7E7', selected == 'auction' ? true:false)}
      </TouchableOpacity >
      <TouchableOpacity style={styles.menuIcon} onPress={() => {setSelected('more')}}>
            {icon('plus', 28, '#333', '#E7E7E7', selected == 'more' ? true:false)}
      </TouchableOpacity>
      <TouchableOpacity  style={styles.menuIcon} onPress={() => {setSelected('home')}}>
            {icon('home', 28, '#333', '#E7E7E7', selected == 'home' ? true:false)}
      </TouchableOpacity>
      <Animated.View style={{...styles.backgroundIcon, left: moveAnimation}}></Animated.View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menu:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#E7E7E7',
        position: 'relative',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowColor:'#000',
        elevation: 20,
    },
    backgroundIcon:{
        flex: 0.25,
        padding: 28,
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
        zIndex:1
    },
})