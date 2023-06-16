import { StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import Notify from '../assets/notify.svg'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'

const AcessHouseScreen = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [thirdNumber, setThirdNumber] = useState('');
    const [fourthNumber, setFourthNumber] = useState('');
    const [fifthNumber, setfifthNumber] = useState('');

    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();

    const onChangeFirst = (e) => {
        setFirstNumber(e.value);
        if(e.value != ''){
            secondInput.current.focus();
        } 
    }

    const onChangeSecond = (e) => {
        setSecondNumber(e.value);
        console.log(e.value);
        if(e.value != ''){
            thirdInput.current.focus();
        } 
    }

    const onChangeThird = (e) => {
        setThirdNumber(e.value);
        if(e.value != ''){
            fourthInput.current.focus();
        }
    }

    const onChangeFourth = (e) => {
        setFourthNumber(e.value);
        if(e.value != ''){
            fifthInput.current.focus();
        }
    }

    const onChangeFifth = (e) => {
        setfifthNumber(e.value);
        if(e.value != ''){
            Keyboard.dismiss();
        }
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
            <TextInput onChange={(e) => {onChangeFirst(e)}} value={firstNumber} keyboardType='numeric' style={styles.textInput} selectionColor={'#FFF'}/>
            <TextInput ref={secondInput} onChange={(e) => {onChangeSecond(e)}} value={secondNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
            <TextInput ref={thirdInput} onChange={(e) => {onChangeThird(e)}} value={thirdNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
            <TextInput ref={fourthInput} onChange={(e) => {onChangeFourth(e)}} value={fourthNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
            <TextInput ref={fifthInput} onChange={(e) => {onChangeFifth(e)}} value={fifthNumber} style={styles.textInput} keyboardType='numeric' selectionColor={'#FFF'}/>
        </View>
        <TouchableOpacity style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <View style={styles.button}>
                <Text style={styles.textButton}>Solicitar acesso</Text>
            </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{position:'absolute', left:'7.5%', top:'7.5%', zIndex:2}}>
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