import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageJustTittle from '../components/PageJustTittle'
import CardPendentTask from '../components/CardPendentTask'
import TasksTittle from '../components/TasksTittle'
import Tasks from '../components/Tasks'
import TasksOfHome from '../components/TasksOfHome'


const TemplateScreen = () => {
  return (
    <View style={styles.screen}>
        <ProfileHeader user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
            <PageJustTittle text={{title:'Minha Casa'}}/>
            <View style={styles.block}>
                <CardPendentTask text={{repname:'Concordaro', check:'1', uncheck:'2'}}/>
                <TasksTittle text={{title:'Minhas tarefas'}} buttonConfig={{title:'Entrar'}}/>
                <Tasks text={{task:'Lavar roupa', points:'5'}}></Tasks>
                <Tasks text={{task:'Lavar o banheiro', points:'8'}}></Tasks>
                <TasksTittle text={{title:'Tarefas da casa'}} buttonConfig={{title:'Entrar'}}/>
                <TasksOfHome text={{task:'Lavar roupa', points:'5'}}/>
                <TasksOfHome text={{task:'Lavar roupa', points:'5'}}/>
                <TasksOfHome text={{task:'Lavar roupa', points:'5'}}/>
                <TasksOfHome text={{task:'Lavar roupa', points:'5'}}/>
            </View>
        </ScreenBoard>
    </View>
  )
}

export default TemplateScreen

const styles = StyleSheet.create({
    screen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%',
        flex: 1,
        paddingTop: '17%'
    },
    block:{
        width:'100%',
        height:'100%',
        marginTop:'10%',

        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
})