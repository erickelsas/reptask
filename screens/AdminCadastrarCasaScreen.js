import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageJustTitle from '../components/PageJustTittle'
import BodyTextWithTittle from '../components/BodyTextWithTittle'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'

const AdminCadastrarCasaScreen = ({ route, navigation}) => {
    const authState = useContext(AuthContext);
    const userState = useContext(UserContext);

    const [name, setName] = useState('');

    const onChangeTextHandle = (e) => {
        setName(e);
    }

    const onPressHandle = async () => {
        if(name.length == 0){
            return;
        }

        
        let res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Houses`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization':`Bearer ${authState[0]}`
            },
            body: JSON.stringify({name, owner: userState[0].id}),
        });

        res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/byemail/${userState[0].email}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization':`Bearer ${authState[0]}`
            }
        });

        const json = await res.json();
    }

  return (
    <SafeAreaView style={styles.screen}>
        <ProfileHeader user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
            <PageJustTitle text={{title:'Cadastrar casa'}}></PageJustTitle>
            <View style={styles.block}>
                <Image stytle={styles.bluehouse} source={require('../assets/images/blueBigHouse.png')}></Image>
                <BodyTextWithTittle text={{title:'Parece que você ainda não faz parte de uma casa', subtitle:'Cadastre sua casa abaixo para aproveitar todas funções do aplicativo'}}></BodyTextWithTittle>
                <View style={styles.form}>
                    <InputText inputConfig={{secure:false, onChange:onChangeTextHandle, value:name}}/>
                    <View style={{width:'60%', display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'20%'}}>
                        <PatternButton buttonConfig={{title:'Criar Casa', onPress:onPressHandle}}></PatternButton>
                    </View>
                </View>
            </View>    
        </ScreenBoard>
    </SafeAreaView>
  )
}

export default AdminCadastrarCasaScreen

const styles = StyleSheet.create({
    screen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%',
        flex: 1,
        paddingTop:'20%'
    },
    block:{
        width:'90%',
        height:'100%',
        marginTop:'10%',

        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    bluehouse:{
        position: 'relative',

    },
    form:{
        width:'80%',
        display:'flex',
        justifyContent:'center',
        marginLeft:'10%',
        marginTop: '7.5%',
        marginTop:'0%',
    },
})