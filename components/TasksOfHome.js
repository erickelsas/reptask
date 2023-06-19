import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Star from   '../assets/images/star.svg'
import PatternButton from './PatternButton'
import ButtonAtribuirTask from './ButtonAtribuirTask'

const TasksOfHome = (props) => {

    
  return (
    <View style={styles.component}>
        <View style={styles.container}>
            <Text style={styles.titleTask}>{props.text.task}</Text>
            <View style={styles.points}>
            <Star></Star>
            <Text style={styles.textpoints}> {props.text.points} pontos</Text>
            </View>
            <ButtonAtribuirTask buttonConfig={{title:'Atribuir Task'}}/>
        </View>
        <View style={styles.linha}/>
    </View>
  )
}

export default TasksOfHome

const styles = StyleSheet.create({
    component:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
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
        fontFamily:'Inter-Bold',
        fontSize:16,
        color: '#1E1E1E',
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
    linha:{
        width: '85%',
        marginTop: '3%',
        backgroundColor: '#D9D9D9',
        height: '2%'
    }

})