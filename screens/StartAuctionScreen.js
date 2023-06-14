import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import TaskNameAndMinimum from '../components/TaskNameAndMinimum'
import InputText from '../components/InputText'

const StartAuctionScreen = () => {
    const [minimum, setMinimum] = useState('');
    const onChangeTextHandle = (e) => {
        if(!isNaN(e.value)){
            setMinimum(e.value);
        }
    }
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
                </View>
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
        width:'95%',
        height:'100%',
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
        marginTop:'7.5%'
    }
})