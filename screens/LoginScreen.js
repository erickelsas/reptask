import { KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../contexts/AuthContext';

const LoginScreen = ({navigation, route}) => {
    const authHook = useContext(AuthContext);
    const auth = authHook[0];
    const setAuth = authHook[1];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmailHandle = (e) => {
        setEmail(e.value);
    }

    const onChangePasswordHandle = (e) => {
        setPassword(e.value);
    }

    const onPressHandleEntrar= (e) => {
        setAuth(true);
    }

    const onPressHandleRecuperar = (e) => {
        
    }

  return (
    <SafeAreaView style={styles.screen}>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'25%'}}>
            <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.circle}>
            <LinearGradient colors={['#24305F', '#202A4C']} start={{x:1, y:1}} end={{x:1, y:0}} locations={[.2,0.7]} style={styles.background}/>
            <View style={styles.formContainer}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{flex:1, width:'100%'}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                        <>
                            <InputText light={true} inputConfig={{secure:false, onChange:onChangeEmailHandle, placeholder:'xxxxx@email.com'}}>E-mail</InputText>
                            <InputText light={true} inputConfig={{secure:true, onChange:onChangePasswordHandle}}>Senha</InputText>
                            <View style={{width:'90%', marginLeft:'5%'}}>
                                <Text style={styles.recuperarSenha} onPress={onPressHandleRecuperar}>
                                    <Text style={styles.recuperarUm}>Esqueceu sua senha? </Text>
                                    <Text style={styles.recuperarDois}>Recuperar senha</Text>
                                </Text>
                                <PatternButton buttonConfig={{title:'Entrar', onPress:onPressHandleEntrar}}/>
                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        </View>              
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '',
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
        height:'100%',
        borderTopLeftRadius:400,
        borderTopRightRadius:400,
        marginLeft:'0%',
        position:'absolute',
        zIndex:1
    },
    circle:{
        width:'200%',
        height:'75%',
    },
    text:{
        fontSize:32,
        fontFamily:'Roboto-Bold',
        color:'#36457D',
        marginTop:'20%'
    },
    formContainer:{
        width:'30%',
        height:'100%',
        marginLeft:'35%',
        display:'flex',
        justifyContent:'center',
        zIndex:2,
        gap: 12,
        marginTop:'20%'
    },
    recuperarSenha:{
        fontFamily:'Roboto-Bold',
        fontSize:11,
        textAlign:'center',
        marginTop:'-1%',
        marginBottom:'5%'
    },
    recuperarUm:{
        color:'#FFFFFF'
    },
    recuperarDois:{
        color:'#C2C2C2'
    }
})