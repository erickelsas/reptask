import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import PageJustTittle from '../components/PageJustTittle'
import BodyTextWithTittle from '../components/BodyTextWithTittle'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../contexts/AuthContext'

const AdminCadastrarCasaScreen = ({ route, navigation}) => {
    const authHook = useContext(AuthContext);
    const auth = authHook[0];
    const setAuth = authHook[1];

    const [name, setName] = useState('');
    const onChangeTextHandle = (e) => {
        setName(e.value);
    }

    const onPressHandle = () => {
        setAuth(true);
    }

  return (
    <SafeAreaView style={styles.screen}>
        <ProfileHeader user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <ScreenBoard style={styles.board}>
            <PageJustTittle text={{title:'Cadastrar casa'}}/>
            <View style={styles.block}>
                <Image stytle={styles.bluehouse} source={require('../assets/images/blueBigHouse.png')}></Image>
                <BodyTextWithTittle text={{title:'Parece que você ainda não faz parte de uma casa', subtitle:'Cadastre sua casa abaixo para aproveitar todas funções do aplicativo'}}></BodyTextWithTittle>
                <View style={styles.form}>
                    <InputText inputConfig={{secure:false, onChange:onChangeTextHandle, value:minimum}}>Nome da Republica</InputText>
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
        width:'100%',
        height:'100%',
        marginTop:'10%',

        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    bluehouse:{
        marginTop:'-15%',

    },
    form:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        marginTop: '15%',
    },
})