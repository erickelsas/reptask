import { StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import Notify from '../assets/notify.svg'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserContext } from '../contexts/UserContext'
import { AuthContext } from '../contexts/AuthContext'

const AcessHouseScreen = ({navigation}) => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [thirdNumber, setThirdNumber] = useState('');
    const [fourthNumber, setFourthNumber] = useState('');
    const [fifthNumber, setfifthNumber] = useState('');

    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();

    const userState = useContext(UserContext);
    const authState = useContext(AuthContext);


    const [error, setError] = useState(false);

    const onChangeFirst = (e) => {
        if(e.length > 1){
            return
        }

        setFirstNumber(e);
        if(e != ''){
            secondInput.current.focus();
        } 
    }

    const onChangeSecond = (e) => {
        if(e.length > 1){
            return
        }

        setSecondNumber(e);
        console.log(e);
        if(e != ''){
            thirdInput.current.focus();
        } 
    }

    const onChangeThird = (e) => {
        if(e.length > 1){
            return
        }

        setThirdNumber(e);
        if(e != ''){
            fourthInput.current.focus();
        }
    }

    const onChangeFourth = (e) => {
        if(e.length > 1){
            return
        }

        setFourthNumber(e);
        if(e != ''){
            fifthInput.current.focus();
        }
    }

    const onChangeFifth = (e) => {
        if(e.length > 1){
            return
        }

        setfifthNumber(e);
        if(e != ''){
            Keyboard.dismiss();
        }
    }

    const onPressHandleVoltar = () => {
        navigation.goBack(null);
    }

    const onPressHandleEntrar = async () => {
        const idString = `${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}${fifthNumber}`;
        const id = parseInt(idString);

        const obj = {houseId: id, userId:userState[0].id}

        console.log(obj);

        const res = await fetch('https://reptaskbackapi.azurewebsites.net/api/Houses/askPermission', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization':`Bearer ${authState[0]}`
            },
            body: JSON.stringify(obj),
        });

        const json = await res.json();


        if(json.value.includes("Error") || json.value.includes('error')){
            setError(true);
            return; 
        }

        setError(false);

        navigation.navigate("Esperando");
    }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{marginTop:'-40%'}}>
        <Notify width={300}/>    
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
            Falta pouco!
        </Text>
        <Text style={styles.subtitle}>
            Digite o código fornecido pelo administrador para entrar em uma rep
        </Text>
      </View>
      <View style={styles.card}>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap: 12, width:'100%'}}>
            <TextInput onChangeText={(e) => {onChangeFirst(e)}} value={firstNumber} keyboardType='numeric' style={styles.textInput} selectionColor={'#FFF'}/>
            <TextInput ref={secondInput} onChangeText={(e) => {onChangeSecond(e)}} value={secondNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
            <TextInput ref={thirdInput} onChangeText={(e) => {onChangeThird(e)}} value={thirdNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
            <TextInput ref={fourthInput} onChangeText={(e) => {onChangeFourth(e)}} value={fourthNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
            <TextInput ref={fifthInput} onChangeText={(e) => {onChangeFifth(e)}} value={fifthNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
        </View>
        <TouchableOpacity style={{display:'flex', justifyContent:'center', alignItems:'center'}} onPress={onPressHandleEntrar}>
            <View style={styles.button}>
                <Text style={styles.textButton}>Solicitar acesso</Text>
            </View>
        </TouchableOpacity>
      </View>

      {error && <Text style={{fontSize:16, color:'#FF0000', marginTop:'5%', textAlign:'center'}}>Houve um erro, tente novamente!</Text>}
      {!error && <Text style={{fontSize:16, color:'#FF0000', marginTop:'5%', textAlign:'center'}}></Text>}


      <TouchableOpacity style={{position:'absolute', left:'7.5%', top:'7.5%', zIndex:2}} onPress={onPressHandleVoltar}>
        <Icon name='chevron-left' size={24} color="#AAAAAA"/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AcessHouseScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#EAEAEA',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        position:'relative'
    },
    textContainer:{
        width:'80%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap: 12,
        marginTop:'-25%'
    },
    title:{
        fontFamily:'Roboto-Bold',
        fontSize:32,
        color:'#2C286B'
    },
    subtitle:{
        fontFamily:'Inter-Regular',
        fontSize:14,
        color:'#5A5A5A',
        textAlign:'center'
    },
    card:{
        width:'80%',
        minHeight:'20%',
        backgroundColor:'#1E284A',
        borderRadius:20,
        padding:12,
        paddingVertical:32,
        elevation:20,
        marginTop:'10%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        gap:20
    },
    textInput:{
        borderWidth:2,
        borderColor:'#c2c2c2',
        padding:8,
        borderRadius:8,
        height:48,
        width:48,
        fontFamily:'Roboto-Regular',
        textAlign:'center',
        fontSize:16,
        color:'#fff'
    },
    button:{
        width:'80%',
        paddingHorizontal:16,
        paddingVertical:8,
        backgroundColor:'#FFF',
        borderRadius:8,
        elevation:10
    },
    textButton:{
        fontFamily:'Roboto-Bold',
        textAlign:'center',
        fontSize:14,
        color:'#2C286B'
    }
})