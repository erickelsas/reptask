import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import TaskNameAndMinimum from '../components/TaskNameAndMinimum'
import AuctionPointsLine from '../components/AuctionPointsLine'

const ResultAuctionScreen = () => {
  const [userVector, setUserVector] = useState([{id:0, name: 'Joaaooooooo', points: 50, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}, {id:1, name: 'Maria Luísa', points: 40, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:2, name: 'Maria Luísa', points: 30, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:3, name: 'Maria Luísa', points: 20, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:4, name: 'Maria Luísa', points: 35, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:5, name: 'Maria Luísa', points: 5, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}].sort((a,b) => a.points - b.points));
  const [userVectorWithoutMinimal, setUserVectorWithoutMinimal] = useState([]);

  useEffect(() => {
    setUserVectorWithoutMinimal(userVector.slice(1));
  }, [userVector])

  return (
    <View style={styles.screen}>
        <ProfileHeader user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
          <PageTitle text={{title:'Resultado do leilão', subtitle:'Atribua a tarefa do leilão ao usuário'}}/>
          <View style={styles.backgroundTask}>
            <TaskNameAndMinimum theme='dark' task={{name:'Tirar o lixo', minimum:15}}/>
          </View>
          <ScrollView style={{width:'100%', marginTop:'15%', height:'80%', backgroundColor:'#E7E7E7', paddingLeft:'5%', paddingVertical:'4%', borderRadius: 8, elevation: 10, shadowColor: '#000'}}>
            <AuctionPointsLine user={userVector[0]} isMinimum={true}/>
            {userVectorWithoutMinimal && userVectorWithoutMinimal.map((user) => (<AuctionPointsLine key={user.id} user={user} isMinimum={false}/>))}
          </ScrollView>
        </ScreenBoard>
    </View>
  )
}

export default ResultAuctionScreen

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
    backgroundTask:{
      width:'90%',
      padding:8,
      paddingHorizontal: 16,
      backgroundColor:'#36457D',
      borderRadius:32,
      elevation: 20,
      shadowColor: '#000',
      marginTop: '10%'
    }
})