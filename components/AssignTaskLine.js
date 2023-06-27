import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ParticipantPhotoBubble from './ParticipantPhotoBubble';
import { TouchableOpacity } from 'react-native';

const AssignTaskLine = (props) => {
  return (
    <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginVertical:'3%'}}>
        <View style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:12, flexDirection:'row'}}>
            <ParticipantPhotoBubble participant={props.data.user} index={0}/>
            <Text style={{fontSize:15, fontFamily:'Inter-Bold'}}>
                {props.data.user.nickname}
            </Text>
        </View>
        <TouchableOpacity onPress={() => {props.data.setChecked(props.data.user.id);}}>
            <View style={styles.checkbox}>
                {props.data.checked == props.data.user.id && <View style={styles.marked}/>}
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default AssignTaskLine

const styles = StyleSheet.create({    checkbox:{
    height:24,
    width:24,
    borderRadius:12,
    borderWidth:3,
    borderColor:'#878787',
    elevation:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
},
marked:{
    height:14,
    width:14,
    borderRadius:7,
    backgroundColor:'#36457D'
},

})