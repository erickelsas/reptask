import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Approval from '../assets/pendingapproval.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import PatternButton from '../components/PatternButton'

const AwaitingScreen = ({navigation}) => {
    const onPressHandle = () => {
        
    }

    const onPressHandleDeslogar = () => {
        navigation.navigate("Login");
    }

  return (
    <SafeAreaView style={styles.screen}>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', gap:100}}>
            <Approval width={340}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Quase lá!
                </Text>
                <Text style={styles.subtitle}>
                    Falta apenas que o administrador te aceite na rep!
                </Text>
            </View>
            <View>
                <PatternButton buttonConfig={{title:'Tentar novamente', onPress:onPressHandle}}/>
                <PatternButton buttonConfig={{title:'Deslogar', onPress:onPressHandleDeslogar, isRed:true}}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default AwaitingScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#EAEAEA',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        position:'relative',
        backgroundColor:'#EAEAEA'
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
        fontSize:36,
        color:'#2C286B'
    },
    subtitle:{
        fontFamily:'Inter-Regular',
        fontSize:16,
        color:'#5A5A5A',
        textAlign:'center'
    }
})