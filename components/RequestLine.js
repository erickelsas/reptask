import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ParticipantPhotoBubble from './ParticipantPhotoBubble'
import { TouchableOpacity } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'

const RequestLine = (props) => {
    const authState = useContext(AuthContext);
    const userState = useContext(UserContext);

    const onPressAceitarHandle = async () => {
        const res = await fetch('https://reptaskbackapi.azurewebsites.net/api/Houses/acceptUser', {method:"PUT", headers:{
            'Content-type': 'application/json',
            'Authorization':`Bearer ${authState[0]}`
            },
            body: JSON.stringify({houseId:userState[0].houseId, userId:props.request.id}),
            });
        
            removeRequest();

            props.flag[1](!props.flag[0]);
    }

    const onPressRecusarHandle = async () => {
        const res = await fetch('https://reptaskbackapi.azurewebsites.net/api/Houses/denyUser', {method:"PUT", headers:{
            'Content-type': 'application/json',
            'Authorization':`Bearer ${authState[0]}`
            },
            body: JSON.stringify({houseId:userState[0].houseId, userId:props.request.id}),
            });

            removeRequest();
    }

    const removeRequest = () => {
        props.setRequests(props.requests.filter(r => r.id != props.request.id));
    }

  return (
    <View style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'row', marginBottom:'4%'}}>
        <View style={{display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'row', gap:12, width:'52%', overflow:'hidden'}}>
            <ParticipantPhotoBubble participant={props.request} index={0}/>
            <Text style={{fontSize:12, fontFamily:'Inter-Bold'}} numberOfLines={1}>{ ((props.request.nickname).length > 11) ? 
    (((props.request.nickname).substring(0,11-3)) + '...') : 
    props.request.nickname }</Text>
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