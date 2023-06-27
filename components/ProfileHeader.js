import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context';
import RequestModalScreen from '../screens/RequestModalScreen';
import { UserContext } from '../contexts/UserContext';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../contexts/AuthContext';


const ProfileHeader = (props) => {
    const date = new Date();
    const [modalVisible, setModalVisible] = useState(false);

    const userState = useContext(UserContext);
    const authState = useContext(AuthContext);


    const onPressHandle = () => {
        setModalVisible(true);
    }

    const onPressImageHandle = () => {
        props.navigation.navigate("Editar perfil");
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/${userState[0].id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization':`Bearer ${authState[0]}`
                }
            });
        
            const json = await res.json();
        
            userState[1](json);
        }

        fetchUser();
    }, [])

  return (
    <>
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <TouchableOpacity style={userState[0].role == "ADMIN" ? styles.content:{opacity:0}} onPress={onPressHandle}><Icon name={'user-plus'} size={26} color={'#202020'}/></TouchableOpacity>
        <View style={{...styles.content, ...styles.textContent}}>
            <Text style={styles.textTitle} numberOfLines={1}>{userState[0].nickname}</Text>
            <View style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:4}}>
                <IconCommunity name={'star-four-points'} size={14} color={'#5A5A5A'}/>
                <Text style={{fontFamily:'Inter-Medium', fontSize:13, color:'#5A5A5A'}}>{`${userState[0].points} pontos`}</Text>
            </View>
        </View>
        <View style={styles.content}>
            <TouchableOpacity style={styles.photoContainer} onPress={onPressImageHandle}>
                {userState[0].url != '' ? <Image source={{uri: userState[0].url}} style={{width:'100%', height:'100%'}}/>:<Text style={{fontSize:24, fontFamily:'Roboto-Bold', textAlign:'center'}}>{userState[0].nickname.substr(0,1)}</Text>}
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    <RequestModalScreen modalConfig={{modalVisible, setModalVisible}} flag={props.flag}/>
    </>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
    component:{
        flex:1,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        width:'100%',
        zIndex:2
    },
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    content:{
        width:'33.33%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    textContent:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    photoContainer:{
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        elevation: 10,
        shadowColor:'#000',
        backgroundColor:'#D9D9D9',
        borderColor:'#36457D',
        borderWidth:2
    },
    textTitle:{
        fontSize:18,
        fontFamily:'Roboto-Bold',
        color:'#000',
    },
    textSubTitle:{
        fontSize:13,
        fontFamily:'Inter-Medium',
        color:'#5A5A5A',
    }
})