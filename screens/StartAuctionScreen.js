import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import TaskNameAndMinimum from '../components/TaskNameAndMinimum'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import BubbleVector from '../components/BubbleVector'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'
import AuctionTask from '../components/AuctionTask'
import { AuctionContext } from '../contexts/AuctionContext'

const StartAuctionScreen = ({navigation}) => {
    const userState = useContext(UserContext);
    const authState = useContext(AuthContext);
    const auctionState = useContext(AuctionContext);

    const [minimum, setMinimum] = useState('');
    const [myTasks, setMyTasks] = useState([]);
    const [moradores, setMoradores] = useState([]);

    const checkbox = useState(0);

    const onChangeTextHandle = (e) => {
        setMinimum(e);
    }

    const onPressHandle = async () => {
        const obj = {
            idChore:checkbox[0],
            userIdMin: userState[0].id,
            minPoints:parseInt(minimum),
            idHouse:userState[0].houseId
        }

        const res = await fetch('https://reptaskbackapi.azurewebsites.net/api/Auction/startAuction/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization':`Bearer ${authState[0]}`
            },
            body: JSON.stringify(obj),
        });

        navigation.navigate('Auction');
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

    const fetchMoradores = async () => {
        const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/house/${userState[0].houseId}`, {method:'GET', headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${authState[0]}`,
        }});

        const json = await res.json();

        setMoradores(json);
    }

    useEffect(() => {
        fetchMyTasks();
        fetchMoradores();
    }, []);

  return (
    <>
        <SafeAreaView style={styles.screen}>
        <ProfileHeader navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
            <ScreenBoard style={styles.board}>
                <PageTitle text={{title:'Inicie o leilão', subtitle:'Informe a pontuação que os usuários podem utilizar para essa tarefa'}}/>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex:1, width:'100%'}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                        <>
                            <View style={styles.block}>
                            <ScrollView  showsVerticalScrollIndicator={false} style={{width: '100%', height: '100%', marginBottom:'0%'}}>
                                {myTasks.length == 0 ? <Text style={{textAlign:'center', paddingTop:'5%', fontFamily:'Inter-Medium', fontSize:13}}>Você ainda não tem tasks!</Text>:myTasks.map((task) => (<AuctionTask key={task.id} task={task} checkbox={checkbox}/>))}
                            </ScrollView>
                                <View style={styles.line}></View>
                                <View style={styles.form}>
                                    <InputText inputConfig={{secure:false, onChange:onChangeTextHandle, value:minimum, keyboardType:"numeric"}}/>
                                    <View style={checkbox[0] == 0 ? {display:'none'}:{}}>
                                        <PatternButton buttonConfig={{title:'Iniciar leilão', onPress:onPressHandle}}></PatternButton>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.participantsContainer}>
                                <Text style={styles.participantsTitle}>Participantes</Text>
                                <BubbleVector participantVector={moradores}/>
                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScreenBoard>
        </SafeAreaView>
    </>
  )
}

export default StartAuctionScreen

const styles = StyleSheet.create({
    screen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%',
        flex: 1,
    },
    block:{
        width:'90%',
        height:'40%',
        marginTop:'10%',
        marginLeft:'5%',
    },
    line:{
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1.5,
        marginTop: 8
    },
    form:{
        width:'80%',
        display:'flex',
        justifyContent:'center',
        marginLeft:'10%',
        marginTop: '7.5%',
    },
    participantsContainer:{
        width:'100%',
        height:'50%',
        marginTop: '15%'
    },
    participantsTitle:{
        fontFamily:'Roboto-Bold',
        fontSize:20,
        color:'#000',
        paddingBottom:'7.5%'
    }
})