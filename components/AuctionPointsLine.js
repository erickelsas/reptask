import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import ParticipantPhotoBubble from './ParticipantPhotoBubble'
import { AuthContext } from '../contexts/AuthContext'

const AuctionPointsLine = (props) => {
    const [number, setNumber] = useState(0);
    const authState = useContext(AuthContext);
    const [isMinimum, setIsMinimum] = useState(false);

    const onPress = async () => {
        console.log(`https://reptaskbackapi.azurewebsites.net/api/Auction/tiebreaker/${props.user.id}/${props.auctionId}`);

        await fetch(`https://reptaskbackapi.azurewebsites.net/api/Auction/tiebreaker/${props.user.id}/${props.auctionId}`, {method:"GET", headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${authState[0]}`
        }});

        setIsMinimum(false);
        props.setShow(false);
    }

    useEffect(() => {
        setNumber(props.count);
        props.setCount(number + 1);

        setIsMinimum(props.isMinimum);
    }, [])
  return (
    <View style={styles.container}>
        <Text size={{fontSize:12, fontFamily:'Inter-Bold'}}>
            {props.count}
        </Text>
        <View style={styles.textContainer}>
            <Text style={props.light?styles.nameLight:styles.name} numberOfLines={1} >
                {props.user.nickname.split(' ')[0]}
            </Text>
            <IconCommunity name={'star-four-points'} size={14} color={props.light?'#E9E9E9':'#5A5A5A'} style={{marginRight:'-8%'}}/>
            <Text style={props.light?styles.pointsLight:styles.points}>
                {props.user.points.toString().length > 1 ? props.user.points:`0${props.user.points}`} pontos
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            {props.isMinimum ? <TouchableOpacity style={styles.buttonContent} onPress={onPress}>
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
        width:'45%'  
    },
    points:{
        fontFamily:'Inter-Medium',
        fontSize:13,
        color:'#474747',
    },
    nameLight:{
        fontFamily:'Inter-Bold',
        fontSize:16,
        color:'#FFF',
        width:'45%'  
    },
    pointsLight:{
        fontFamily:'Inter-Medium',
        fontSize:13,
        color:'#E9E9E9',
    }
})