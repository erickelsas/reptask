import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageJustTittle from '../components/PageJustTittle'
import CardPendentTask from '../components/CardPendentTask'
import TasksTittle from '../components/TasksTittle'
import Tasks from '../components/Tasks'
import TasksOfHome from '../components/TasksOfHome'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'
import { RepContext } from '../contexts/RepContext'


const AdminHome = ({ navigation }) => {
    const userState = useContext(UserContext);
    const authState = useContext(AuthContext);
    const repState = useContext(RepContext);
    
    const [myTasks, setMyTasks] = useState([]);
    const [houseTasks, setHouseTasks] = useState([]);
    const [moradores, setMoradores] = useState([]);
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    const flag = useState(false);
    const flagTask = useState(false);

    useEffect(() => {
        const fetchHouseTasks = async () => {
            const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Chores/chores/${userState[0].houseId}`, {method:'GET', headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${authState[0]}`,
            }});

            const json = await res.json();

            setHouseTasks(json);
        }

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

        fetchMyTasks();
        fetchHouseTasks();
        fetchPendingAndFinished();
    }, [flagTask[0]]);

    const fetchMoradores = async () => {
        const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/house/${userState[0].houseId}`, {method:'GET', headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${authState[0]}`,
        }});

        const json = await res.json();

        setMoradores(json);
        flagTask[1](!flagTask[0]);
    }

    useEffect(() => {
        fetchMoradores();
    }, [flag[0]]);

    useEffect(() => {
        fetchMoradores();
    }, [])


  return (
    <View style={styles.screen}>
        <ProfileHeader navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} flag={flag} style={styles.header}/>
        <ScreenBoard style={styles.board}>
            <View style={{width: '100%', height: '100%'}}>
                <PageJustTittle text={{title:'Minha Casa'}}/>
                <View style={styles.block}>
                    <CardPendentTask text={{repname:repState[0].name, check:completed, uncheck:pending}} moradores={moradores}/>
                    <TasksTittle text={{title:'Minhas tarefas'}}/>
                    <ScrollView  showsVerticalScrollIndicator={false} style={{width: '100%', height: '100%', marginBottom:'0%'}}>
                        {myTasks.length == 0 ? <Text style={{textAlign:'center', paddingTop:'5%', fontFamily:'Inter-Medium', fontSize:13}}>Você ainda não tem tasks!</Text>:myTasks.map((task) => (<Tasks  navigation={navigation} key={task.id} task={task} moradores={moradores} flag={flagTask}/>))}
                    </ScrollView>
                    <TasksTittle text={{title:'Tarefas da casa'}} buttonConfig={{title:'Entrar'}}/>
                    <ScrollView  showsVerticalScrollIndicator={false} style={{width: '100%', height:'100%', marginBottom:'20%'}}>
                        {houseTasks.length != 0 ? houseTasks.map((task) => (<TasksOfHome key={task.id} task={task} moradores={moradores} flag={flag}/>)):<Text style={{textAlign:'center', paddingTop:'5%', fontFamily:'Inter-Medium', fontSize:13}}>Você não tem tasks para atribuir!</Text>}
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