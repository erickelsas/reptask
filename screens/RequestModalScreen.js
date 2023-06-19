import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PageTitle from '../components/PageTitle'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ParticipantPhotoBubble from '../components/ParticipantPhotoBubble'
import PatternModalButton from '../components/PatternModalButton'
import RequestLine from '../components/RequestLine'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'

const RequestModalScreen = (props) => {
        const userState = useContext(UserContext);
        const authState = useContext(AuthContext);

        const [requests, setRequests] = useState([]);

        useEffect(() => {
            const requestFetch = async () => {
                const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Houses/pendingUsers/${userState[0].houseId}`, {method: 'GET',
                headers:{
                    'Content-type': 'application/json',
                    'Authorization':`Bearer ${authState[0]}`
                }});
            
                const json = await res.json();

                setRequests(json);
            }

            requestFetch();
        }, [])

  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <View style={{display:'flex', justifyContent:'space-between', height:'70%', width:'90%'}}>
            <PageTitle text={{title:'Solicitações', subtitle:'Solicitações de entrada pendentes'}}/>
            <View style={{height:'115%', display:'flex', justifyContent:'space-between', marginTop:'10%'}}>
                <ScrollView style={{height:'100%', width:'100%'}} showsVerticalScrollIndicator={false}>
                    {requests && requests.map((request) => (<RequestLine request={request} key={request.id} setRequests={setRequests} requests={requests}/>))}
                </ScrollView>
            </View>
        </View>
    </ModalTemplateScreen>
  )
}

export default RequestModalScreen

const styles = StyleSheet.create({})