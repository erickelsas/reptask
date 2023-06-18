import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ParticipantPhotoBubble from './ParticipantPhotoBubble'
import { TouchableOpacity } from 'react-native'

const RequestLine = (props) => {
    const onPressAceitarHandle = () => {

    }

    const onPressRecusarHandle = () => {

    }
  return (
    <View style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'row', marginBottom:'4%'}}>
        <View style={{display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'row', gap:12, width:'52%', overflow:'hidden'}}>
            <ParticipantPhotoBubble participant={props.request} index={0}/>
            <Text style={{fontSize:12, fontFamily:'Inter-Bold'}} numberOfLines={1}>{ ((props.request.name).length > 11) ? 
    (((props.request.name).substring(0,11-3)) + '...') : 
    props.request.name }</Text>
        </View>
        <View style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'row', width:'48%'}}>
            <TouchableOpacity onPress={onPressAceitarHandle}>
                <View style={{...styles.button, backgroundColor:'#36457D'}}>
                    <Text style={{...styles.text, color:'#FFFFFF'}}>
                        Aceitar
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRecusarHandle}>
                <View style={{...styles.button, backgroundColor:'#D5D5D5'}}>
                    <Text style={{...styles.text, color:'#36457D'}}>
                        Recusar
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default RequestLine

const styles = StyleSheet.create({
    button:{
        paddingVertical:6,
        paddingHorizontal:12,
        borderRadius:6,
    },
    text:{
        fontFamily:'Inter-Medium',
        fontSize:11
    }
})