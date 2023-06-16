import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileHeader = (props) => {
    const date = new Date();
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.content}><Icon name={'user-plus'} size={26} color={'#202020'}/></TouchableOpacity>
        <View style={{...styles.content, ...styles.textContent}}>
            <Text style={styles.textTitle} numberOfLines={1}>{props.user.name}</Text>
            <Text>{`${date.toLocaleDateString()}`}</Text>
        </View>
        <View style={styles.content}>
            <TouchableOpacity style={styles.photoContainer}>
                <Image source={{uri: props.user.url}} style={{width:'100%', height:'100%'}}/>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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