import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PageTitle from '../components/PageTitle'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ParticipantPhotoBubble from '../components/ParticipantPhotoBubble'
import PatternModalButton from '../components/PatternModalButton'
import RequestLine from '../components/RequestLine'

const RequestModalScreen = (props) => {
    const [requests, setRequests] = useState([{id:0, name: 'Joaooooooooooo', points: 50, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}, {id:1, name: 'Maria Luísa', points: 40, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:2, name: 'Maria Luísa', points: 30, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:3, name: 'Maria Luísa', points: 20, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:4, name: 'Maria Luísa', points: 35, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:5, name: 'Maria Luísa', points: 5, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}]);

    const onPressAceitarHandle = () => {

    }

    const onPressRecusarHandle = () => {

    }

  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <View style={{display:'flex', justifyContent:'space-between', height:'70%', width:'90%'}}>
            <PageTitle text={{title:'Solicitações', subtitle:'Solicitações de entrada pendentes'}}/>
            <View style={{height:'115%', display:'flex', justifyContent:'space-between', marginTop:'10%'}}>
                <ScrollView style={{height:'100%', width:'100%'}}>
                    {requests && requests.map((request) => (<RequestLine request={request} key={request.id}/>))}
                </ScrollView>
            </View>
        </View>
    </ModalTemplateScreen>
  )
}

export default RequestModalScreen

const styles = StyleSheet.create({})