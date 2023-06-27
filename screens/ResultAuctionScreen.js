import { ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageTitle from '../components/PageTitle'
import TaskNameAndMinimum from '../components/TaskNameAndMinimum'
import AuctionPointsLine from '../components/AuctionPointsLine'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'

const ResultAuctionScreen = ({ route, navigation }) => {
  const authState = useContext(AuthContext);
  const userState = useContext(UserContext);

  const [auction, setAuction] = useState([]);
  const [userVectorWithoutMinimal, setUserVectorWithoutMinimal] = useState([]);

  const [draw, setDraw] = useState([]);
  const [rest, setRest] = useState([]);

  const [count, setCount] = useState(0);

  const [auctionId, setAuctionId] = useState(0);

  const [show, setShow] = useState(false);
  useEffect(() => {
    setAuction(route.params.auction);

    const restFunction = async () => {
      const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Auction/participants/${route.params.auction.id}`, {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${authState[0]}`
        }
      });
  
      const json = await res.json();

      setRest(json);
      setAuctionId(route.params.auction.id);
    }

    restFunction();

    if(route.params.status == 2 && userState[0].role == 'ADMIN'){
      const drawFunction = async () => {
        const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Auction/tied/${route.params.auction.id}`, {
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Authorization':`Bearer ${authState[0]}`
          }
      });
        const json = await res.json();
        
        setDraw(json);
        setRest(auction.slice(json.length, ));
      }
      
      drawFunction();
    }

    setShow(route.params.show);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.screen}>
          <ProfileHeader navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
          <ScreenBoard style={styles.board}>
            <PageTitle text={{title:'Resultado do leilão', subtitle:'Atribua a tarefa do leilão ao usuário'}}/>
            <View style={styles.backgroundTask}>
              <TaskNameAndMinimum theme='dark' task={{name:'Tirar o lixo', minimum:15}}/>
            </View>
            <ScrollView style={{width:'100%', marginTop:'15%', marginBottom:'10%', backgroundColor:'#E7E7E7', paddingLeft:'5%', paddingVertical:'4%', borderRadius: 8, elevation: 10, shadowColor: '#000'}} contentContainerStyle={{display:'flex', justifyContent:'center', width:'90%'}} showsVerticalScrollIndicator={false}>
              {draw.length != 0 && draw.map((user, index) => (<AuctionPointsLine key={user.id} count={index + 1} setCount={setCount} user={user} isMinimum={true} auctionId={auctionId} setShow={setShow}/> ))}
              {rest.length != 0 && rest.map((user, index) => (<AuctionPointsLine key={user.id} count={index + draw.length + 1} setCount={setCount} user={user} isMinimum={false} auctionId={auctionId}/>))}
            </ScrollView>
            {show && <TouchableOpacity onPress={() => navigation.navigate("Iniciar leilão")} style={show ? styles.button:styles.NoneButton}>
              <View style={{width:'60%', paddingVertical:8, paddingHorizontal:16, backgroundColor:'#36457D', borderRadius:6, elevation:10}}>
                <Text style={{color:'#FFF', fontFamily:'Roboto-Bold'}}>Iniciar novo leilão</Text>
              </View>
            </TouchableOpacity>}
          </ScreenBoard>
      </SafeAreaView>
    </>
  )
}

export default ResultAuctionScreen

const styles = StyleSheet.create({
    screen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        height:'91.5%',
        width:'100%',
        flex: 1,
        paddingTop:'8.5%'
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
    },
    NoneButton:{
      display:'none',
    },
    button:{
      display:'flex'
    }
})