import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskNameAndMinimum = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.task.name}</Text>
      <Text style={styles.minimum}>Minímo: {props.task.minimum ? props.task.minimun:'Não definido'}</Text>
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
  minimum:{
    fontFamily:'Inter-Regular',
    fontSize:12,
    color:'#474747',
    alignSelf:'flex-end'
  }
})