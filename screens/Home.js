import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageJustTittle from '../components/PageJustTittle'
import TasksTittle from '../components/TasksTittle'
import Tasks from '../components/Tasks'
import CardPoints from '../components/CardPoints'
import PointsTitle from '../components/PointsTitle'
import CardPendentTask from '../components/CardPendentTask'


const Home = () => (
    <SafeAreaView style={styles.screen}>
        <ProfileHeader user={{ name: 'Luísa', url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80' }} style={styles.header} />
        <ScreenBoard style={styles.board}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', height: '100%'}}>
                <PageJustTittle text={{ title: 'REPNAME' }}></PageJustTittle>
                <View style={styles.block}>
                    <TasksTittle text={{ title: 'Minhas tarefas' }}></TasksTittle>
                    <Tasks text={{ task: 'Lavar roupa', points: '1' }} />
                    <Tasks text={{ task: 'Lavar roupa', points: '2' }} />
                    <Tasks text={{ task: 'Lavar roupa', points: '3' }} />
                    
                    <PointsTitle text={{ title: 'Pontuação' }} />

                    <CardPoints text={{pontos:'45', concluidas:'5'}}/>
                </View>
            </ScrollView>
        </ScreenBoard>
    </SafeAreaView>
)

export default Home

const styles = StyleSheet.create({
    screen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%',
        paddingTop: '17%',
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