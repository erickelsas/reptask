import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context';
import RequestModalScreen from '../screens/RequestModalScreen';
import { UserContext } from '../contexts/UserContext';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'


const ProfileHeader = (props) => {
    const date = new Date();

    const userState = useContext(UserContext);

    const [modalVisible, setModalVisible] = useState(false)
    const onPressHandle = () => {
        setModalVisible(true);
    }

    const onPressImageHandle = () => {
        props.navigation.navigate("Editar perfil");
    }

  return (
    <>
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <TouchableOpacity style={userState[0].role == "ADMIN" ? styles.content:{opacity:0}} onPress={onPressHandle}><Icon name={'user-plus'} size={26} color={'#202020'}/></TouchableOpacity>
        <View style={{...styles.content, ...styles.textContent}}>
            <Text style={styles.textTitle} numberOfLines={1}>{userState[0].nickname}</Text>
            <View style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:4}}>
                <IconCommunity name={'star-four-points'} size={14} color={'#5A5A5A'}/>
                <Text style={{fontFamily:'Inter-Medium', fontSize:13, color:'#5A5A5A'}}>{props.home == undefined ? `${userState[0].points} pontos` : `${date.toLocaleDateString()}`}</Text>
            </View>
        </View>
        <View style={styles.content}>
            <TouchableOpacity style={styles.photoContainer} onPress={onPressImageHandle}>
                <Image source={{uri: props.user.url}} style={{width:'100%', height:'100%'}}/>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    <RequestModalScreen modalConfig={{modalVisible, setModalVisible}}/>
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
        shadowColor:'#000'
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