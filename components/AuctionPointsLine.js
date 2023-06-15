import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'

const AuctionPointsLine = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.photoContainer}>
            <Image source={{uri: props.user.url}} style={{width:'100%', height:'100%'}}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1} >
                {props.user.name.split(' ')[0]}
            </Text>
            <IconCommunity name={'star-four-points'} size={14} color={'#5A5A5A'}/>
            <Text style={styles.points}>
                {props.user.points.toString().length > 1 ? props.user.points:`0${props.user.points}`} pontos
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            {props.isMinimum ? <TouchableOpacity style={styles.buttonContent}>
                <Icon name={'add'} size={28} color={'#E6E6E6'}/>
            </TouchableOpacity>:<></>}
        </View>
    </View>
  )
}

export default AuctionPointsLine

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'4%'
    },
    photoContainer:{
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        elevation: 10,
        shadowColor:'#000'
    },
    textContainer:{
        width:'50%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        gap: 16
    },
    buttonContainer:{
        width:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContent:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height: 40,
        width:40,
        borderRadius:30,
        backgroundColor: '#36457D',
        elevation:10,
        shadowColor:'#000'
    },
    name:{
        fontFamily:'Inter-Bold',
        fontSize:16,
        color:'#1E1E1E',
        width:'33.33%'  
    },
    points:{
        fontFamily:'Inter-Medium',
        fontSize:13,
        color:'#474747',
    }
})