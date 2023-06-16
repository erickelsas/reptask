import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Filter from '../assets/bestplace.svg'
import PatternButton from '../components/PatternButton'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountTypeScreen = () => {
  const onPressMorador = () => {

  }

  const onPressAdmin = () => {

  }
  return (
    <SafeAreaView style={styles.screen}>
      <Filter width={300}/>
      <View style={styles.containerContent}>
        <Text style={styles.title}>
          Tipo de conta
        </Text>
        <Text style={styles.subtitle}>
          Informe se você quer entrar na sua rep ou criar uma
        </Text>
        <View style={{width:'100%'}}>
          <PatternButton buttonConfig={{title:'Entrar em uma rep', onPress:onPressMorador}}>
            <View style={styles.icon}>
              <Icon name={'house-user'} size={24} color={'#FFF'}/>
            </View>
          </PatternButton>
          <PatternButton buttonConfig={{title:'Criar uma rep', onPress:onPressAdmin}}>
            <View style={styles.icon}>
              <Icon name={'plus'} size={24} color={'#FFF'}/>
            </View>
          </PatternButton>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AccountTypeScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#EAEAEA',
        width:'100%',
        height:'100%',
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    icon:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginRight:8,
    },
    containerContent:{
      width:'80%'
    },
    title:{
      fontFamily:'Roboto-Bold',
      fontSize:32,
      color:'#2C286B',
      textAlign:'center'
    },
    subtitle:{
      fontFamily:'Inter-Regular',
      fontSize:14,
      color:'#5A5A5A',
      textAlign:'center',
      marginBottom:'10%'
    }
})