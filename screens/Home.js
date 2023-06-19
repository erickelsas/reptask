import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageJustTittle from '../components/PageJustTittle'
import TasksTittle from '../components/TasksTittle'
import Tasks from '../components/Tasks'
import CardPendentTask from '../components/CardPendentTask'

const AdminHome = () => {
  return (
    <View style={styles.screen}>
        <ProfileHeader user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
            <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', height: '100%'}}>
                <PageJustTittle text={{title:'REPNAME'}}/>
                <View style={styles.block}>
                    <TasksTittle text={{title:'Minhas tarefas'}}/>
                    <Tasks text={{task:'Lavar roupa', points:'5'}}></Tasks>
                    <Tasks text={{task:'Lavar o banheiro', points:'8'}}></Tasks>
                    <Tasks text={{task:'Lavar roupa', points:'5'}}></Tasks>
                    <Tasks text={{task:'Lavar o banheiro', points:'8'}}></Tasks>
                    <Tasks text={{task:'Lavar roupa', points:'5'}}></Tasks>
                    <Tasks text={{task:'Lavar o banheiro', points:'8'}}></Tasks>
                </View>
            </ScrollView>
        </ScreenBoard>
    </View>
  )
}

export default AdminHome

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