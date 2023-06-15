import { StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import TaskNameAndMinimum from '../components/TaskNameAndMinimum'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import BubbleVector from '../components/BubbleVector'

const StartAuctionScreen = () => {
    const [minimum, setMinimum] = useState('');
    const onChangeTextHandle = (e) => {
        setMinimum(e.value);
    }

    const onPressHandle = () => {

    }

    const participantsVector = [{id:0, url: 'https://images.unsplash.com/photo-1676385901160-a86dc9ccdfe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=486&q=80'}, {id:1, url:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}, {id:2, url:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'}, {id:3, url:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}, ];

  return (
    <View style={styles.screen}>
        <ProfileHeader user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
            <PageTitle text={{title:'Inicie o leilão', subtitle:'Informe a pontuação que os usuários podem utilizar para essa tarefa'}}/>
            <View style={styles.block}>
                <TaskNameAndMinimum task={{name:'Tirar o lixo', minimum:null}}/>
                <View style={styles.line}></View>
                <View style={styles.form}>
                    <InputText inputConfig={{secure:false, onChange:onChangeTextHandle, value:minimum, keyboardType:"numeric"}}/>
                    <View style={{width:'60%', display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'20%'}}>
                        <PatternButton buttonConfig={{title:'Iniciar leilão', onPressButton:onPressHandle}}></PatternButton>
                    </View>
                </View>
            </View>
            <View style={styles.participantsContainer}>
                <Text style={styles.participantsTitle}>Participantes</Text>
                <BubbleVector participantVector={participantsVector}/>
            </View>
        </ScreenBoard>
    </View>
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
        marginTop:'0%',
    },
    participantsContainer:{
        width:'100%',
        height:'40%'
    },
    participantsTitle:{
        fontFamily:'Roboto-Bold',
        fontSize:20,
        color:'#000',
        paddingBottom:'7.5%'
    }
})