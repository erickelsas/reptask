import { KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';

const SignUpScreen = ({route, navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [error, setError] = useState(false);

    const authState = useContext(AuthContext);
    const userState = useContext(UserContext);

    const onChangeEmailHandle = (e) => {
        setEmail(e);
    }

    const onChangePasswordHandle = (e) => {
        setPassword(e);
    }

    const onChangeNicknameHandle = (e) => {
        setNickname(e);
    }

    const onPressHandleEntrar = async () => {
        let re =/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/;
        if(re.test(email) && password.length >= 4 && nickname != '' && checkbox){
            const userObj = {email, password, nickname};
            let res = await fetch('https://reptaskbackapi.azurewebsites.net/api/Users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userObj),
            });

            const loginObj = {email, password};
            res = await fetch('https://reptaskbackapi.azurewebsites.net/api/Users/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(loginObj),
            });
            let json = await res.json();
            
            if(!json.token){
                setError(true);
                return;
            }
            
            const token = json.token
    
            authState[1](token);

            
            res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/byemail/${email}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization':`Bearer ${token}`
                }
            });

            json = await res.json();

            userState[1](json);

            navigation.navigate("Tipo de conta");

            setError(false);
        }
    }

    const onPressHandleFazerLogin = (e) => {
        navigation.navigate("Login");
    }

    const onPressCheckbox = () => {
        setCheckbox(!checkbox);
    }

  return (
    <SafeAreaView style={styles.screen}>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'25%'}}>
            <LinearGradient colors={['#1F2B59', '#2B396C']} start={{x:1, y:0}} end={{x:1, y:1}} style={styles.background}/> 
            <Image source={require('../assets/logo.png')} style={{resizeMode:'stretch', zIndex:2}}/>  
        </View>
        <View style={styles.circle}>
            <View style={styles.formContainer}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex:1, width:'100%'}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                        <>
                            <Text style={styles.text}>Cadastre-se</Text>
                            <InputText inputConfig={{secure:false, onChange:onChangeNicknameHandle, value:nickname}}>Apelido/Nome</InputText>
                            <InputText inputConfig={{secure:false, onChange:onChangeEmailHandle, placeholder:'xxxxx@email.com', value:email}}>E-mail</InputText>
                            <InputText inputConfig={{secure:true, onChange:onChangePasswordHandle, value:password}}>Senha</InputText>
                            <View style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', gap: 4}}>
                                <TouchableOpacity onPress={onPressCheckbox}>
                                    <View style={styles.checkbox}>
                                        {checkbox && <View style={styles.marked}/>}
                                    </View>
                                </TouchableOpacity>
                                <Text style={{...styles.fazerLogin, ...styles.fazerLoginUm}}>
                                    Estou ciente e concordo com os <Text style={styles.fazerLoginDois}>termos de uso</Text> e <Text style={styles.fazerLoginDois}>regras da comunidade.</Text>
                                </Text>
                            </View>
                            <View style={{width:'90%', marginLeft:'5%', marginTop:'5%'}}>
                                <PatternButton buttonConfig={{title:'Entrar', onPress:onPressHandleEntrar}}/>
                                <Text style={styles.fazerLogin} onPress={onPressHandleFazerLogin}>
                                    <Text style={styles.fazerLoginUm}>Já possui uma conta? </Text>
                                    <Text style={styles.fazerLoginDois}>Fazer login</Text>
                                </Text>
                            </View>
                            {error && <Text style={{fontSize:16, color:'#FF0000', marginTop:'5%', textAlign:'center'}}>Hovue um erro, tente novamente!</Text>}
                            {!error && <Text style={{fontSize:16, color:'#FF0000', marginTop:'5%', textAlign:'center'}}></Text>}
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        </View>              
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#36457D',
        width:'100%',
        height:'100%',
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    background:{
        width:'100%',
        height:'175%',
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        marginLeft:'0%',
        position:'absolute',
        zIndex:1
    },
    circle:{
        width:'200%',
        height:'75%',
        backgroundColor:'#FFF',
        borderTopLeftRadius:400,
        borderTopRightRadius:400,
        zIndex:2
    },
    text:{
        fontSize:32,
        fontFamily:'Roboto-Bold',
        color:'#36457D',
        textAlign:'center',
        marginTop:'5%',
        marginBottom:'25%'
    },
    formContainer:{
        width:'30%',
        height:'100%',
        marginLeft:'35%',
        display:'flex',
        justifyContent:'center',
        zIndex:2,
        gap: 12,
        marginTop:'7%'
    },
    fazerLogin:{
        fontFamily:'Roboto-Bold',
        fontSize:12,
        textAlign:'center',
        marginTop:'3%',
    },
    fazerLoginUm:{
        color:'#878787'
    },
    fazerLoginDois:{
        color:'#36457D'
    }, 
    checkbox:{
        height:24,
        width:24,
        borderRadius:12,
        borderWidth:3,
        borderColor:'#878787',
        elevation: 20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    marked:{
        height:14,
        width:14,
        borderRadius:7,
        backgroundColor:'#36457D'
    }
})