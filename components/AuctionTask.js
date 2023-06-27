import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Star from   '../assets/images/star.svg'

const AuctionTask = (props) => {
    const onPressCheckbox = () => {
        props.checkbox[1](props.task.id);
    }

  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.titleTask}>
                {props.task.name}
            </Text>
            <View style={styles.points}>
            <Star></Star>
            <Text style={styles.textpoints}> {props.task.chorePoints} pontos</Text>
            </View>
            <TouchableOpacity onPress={onPressCheckbox}>
                <View style={styles.checkbox}>
                    {props.task.id == props.checkbox[0] && <View style={styles.marked}/>}
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AuctionTask

const styles = StyleSheet.create({
    component:{
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    
    },
    container:{
        width: '100%',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '4%',
    },
    titleTask:{
        marginLeft:'2%',
        width: '50%',
        fontFamily:'Inter-Bold',
        fontSize:16,
        color: '#1E1E1E',
    },
    titleTaskCheck:{
        marginLeft:'2%',
        width: '50%',
        fontFamily:'Inter-Bold',
        fontSize:16,
        color: '#1E1E1E',
        textDecorationLine: 'line-through',

    },
    points:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textpoints:{
        fontFamily:'Inter-Medium',
        fontSize:14,
        color: '#474747',
        marginRight: '5%'
    },
    checkbox:{
        height:24,
        width:24,
        borderRadius:12,
        borderWidth:3,
        borderColor:'#878787',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    marked:{
        height:24,
        width:24,
        borderRadius:12,
        borderWidth:7,
        borderColor:'#36457D'
    },
    linha:{
        width: '85%',
        marginTop: '3%',
        backgroundColor: '#D9D9D9',
        height: '2%'
    }
})