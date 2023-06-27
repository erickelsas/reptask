import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';

const AwaitingAuctionScreen = ({ navigation }) => {
    const userState = useContext(UserContext);
    const authState = useContext(AuthContext);

    useEffect(() => {
        const selecionaTela = async () => {
            try{
                    let res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Auction/${userState[0].houseId}`, {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${authState[0]}`
                    }
                });
                
                let json = await res.json();

                const auction = json;
                const auctionStatus = json.status;

                if(auctionStatus == 0){
                    navigation.navigate('Resultado leilão', {auction, show:true});
                    return;
                };

                res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Auction/${userState[0].houseId}/${userState[0].id}`, {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${authState[0]}`
                    }
                });

                json = await res.json();

                const value = json.value;
                console.log(value);

                if(value == 0){
                    navigation.navigate('Resultado leilão', {auction, status:2, show:false});
                    return;
                }

                navigation.navigate('Dar lance', {auction});
            } catch(error){
                navigation.navigate('Iniciar leilão');
            }
        }

        selecionaTela();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textFirst}>Aguarde...</Text>
      <Text style={styles.textSecond}>Estamos carregando seu leilão!</Text>
    </View>
  )
}

export default AwaitingAuctionScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textFirst:{
        fontFamily:'Roboto-Bold',
        textAlign:'center',
        fontSize: 44,
        color:'#FFFFFF',
        color:'#1E284A',
    },
    textSecond:{
        fontFamily:'Roboto-Regular',
        textAlign:'center',
        fontSize:16,
        color:'#FFFFFF',
        marginTop: '2%',
        color:'#1E284A',
    }
})