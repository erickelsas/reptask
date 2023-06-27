import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageJustTittle from '../components/PageJustTittle'
import TasksTittle from '../components/TasksTittle'
import Tasks from '../components/Tasks'
import CardPendentTask from '../components/CardPendentTask'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'
import { RepContext } from '../contexts/RepContext'

const AdminHome = ({ navigation }) => {
    const [myTasks, setMyTasks] = useState([]);

    const authState = useContext(AuthContext);
    const userState = useContext(UserContext);
    const repState = useContext(RepContext);
    
    const [moradores, setMoradores] = useState([]);
    const [pending, setPending] = useState(0);
    const [finished, setFinished] = useState(0);

    const flagTask = useState(false);

    const fetchMyTasks = async () => {
        const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Chores/mychores/${userState[0].id}`, {method:'GET', headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${authState[0]}`,
        }
        });

        const json = await res.json();

        setMyTasks(json);
    }

    const fetchPendingAndFinished = async () => {
        let res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Chores/pending/${userState[0].houseId}`, {method: 'GET', headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${authState[0]}`,
        }});

        let json = await res.json();
        setPending(json.value);

        res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Chores/completed/${userState[0].houseId}`, {method: 'GET', headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${authState[0]}`,
        }});

        json = await res.json();
        setCompleted(json.value);
    }

    useEffect(() => {
        const fetchMoradores = async () => {
            const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/house/${userState[0].houseId}`, {method:'GET', headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${authState[0]}`,
            }});
    
            const json = await res.json();
    
            setMoradores(json);
        }

        fetchMoradores();
        fetchMyTasks();
        fetchPendingAndFinished();
    }, []);

    useEffect(() => {
        fetchMyTasks();
        fetchPendingAndFinished();
    }, [flagTask[0]])

  return (
    <View style={styles.screen}>
        <ProfileHeader navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
            <View style={{width: '100%', height: '100%'}}>
                <PageJustTittle text={{title:'Minha casa'}}/>
                <View style={styles.block}>
                    <CardPendentTask text={{repname:repState[0].name, check:finished, uncheck:pending}} moradores={moradores}/>
                    <TasksTittle text={{title:'Minhas tarefas'}}/>
                    <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%', height: '100%'}}>
                        {myTasks.length == 0 ? <Text style={{textAlign:'center', paddingTop:'5%', fontFamily:'Inter-Medium', fontSize:13}}>Você ainda não tem tasks!</Text>:myTasks.map((task) => (<Tasks navigation={navigation} key={task.id} task={task} moradores={moradores} flag={flagTask}/>))}
                    </ScrollView>
                </View>
            </View>
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