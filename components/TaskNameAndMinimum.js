import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskNameAndMinimum = (props) => {
  return (
    <View style={styles.container}>
      <Text style={props.theme != undefined ? styles.nameLight:styles.name}>{props.task.name}</Text>
      <Text style={props.theme != undefined ? styles.minimumLight:styles.minimum}>Minímo: {props.task.minimum ? props.task.minimum:'Não definido'}</Text>
    </View>
  )
}

export default TaskNameAndMinimum

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  name:{
    fontFamily:'Roboto-Bold',
    fontSize:20,
    color:'#1E1E1E',
  },  
  nameLight:{
    fontFamily:'Roboto-Bold',
    fontSize:20,
    color:'#F8F8F8',
  },
  minimum:{
    fontFamily:'Inter-Regular',
    fontSize:12,
    color:'#474747',
    alignSelf:'flex-end'
  },  
  minimumLight:{
    fontFamily:'Inter-Regular',
    fontSize:12,
    color:'#E8E8E8',
  }
})