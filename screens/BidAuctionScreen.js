import { Keyboard, StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ScreenBoard from '../components/ScreenBoard'
import { SafeAreaView } from 'react-native-safe-area-context'
import GirlWithDog from '../assets/girlwithdog.svg'
import PageTitle from '../components/PageTitle'
import TaskNameAndMinimum from '../components/TaskNameAndMinimum'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import RequestModalScreen from './RequestModalScreen'

const BidAuctionScreen = ({route, navigation}) => {
  const [minimum, setMinimum] = useState('');
  const onChangeTextHandle = (e) => {
      setMinimum(e.value);
  }

  const onPressHandle = () => {

  }

  const [requestModal, setRequestModal] = useState(false);

  return (
    <>
        <SafeAreaView style={styles.screen}>
        <ProfileHeader setModalVisible={setRequestModal} navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
          <View style={{width:'100%', height:'95%', paddingTop:'10%'}}>
            <View style={{height:'25%', display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'-14%'}}>
              <GirlWithDog width={300}/>
            </View>
            <ScreenBoard style={styles.board}>
              <PageTitle text={{title:'Informe o lance', subtitle:'Informe quantos pontos deseja dar no lance para não realizar a seguinte tarefa'}}/>
              <KeyboardAvoidingView 
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{flex:1, width:'100%'}}>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.block}>
                        <TaskNameAndMinimum task={{name:'Tirar o lixo', minimum:15}}/>
                        <View style={styles.line}></View>
                        <View style={styles.form}>
                            <InputText inputConfig={{secure:false, onChange:onChangeTextHandle, value:minimum, keyboardType:"numeric"}}/>
                            <View style={{width:'60%', display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'20%'}}>
                                <PatternButton buttonConfig={{title:'Dar lance', onPressButton:onPressHandle}}></PatternButton>
                            </View>
                        </View>
                    </View>
                  </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </ScreenBoard>
          </View>
      </SafeAreaView>
      <RequestModalScreen modalConfig={{modalVisible:requestModal, setModalVisible:setRequestModal}}/>
    </>
  )
}

export default BidAuctionScreen

const styles = StyleSheet.create({
    screen:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent: 'space-between',
      height:'100%',
      width:'100%',
      flex: 1,
  },
  block:{
      width:'90%',
      height:'40%',
      marginTop:'10%',
      marginLeft:'5%',
  },
  line:{
      borderBottomColor: '#D9D9D9',
      borderBottomWidth: 1.5,
      marginTop: 8
  },
  form:{
      width:'80%',
      display:'flex',
      justifyContent:'center',
      marginLeft:'10%',
      marginTop: '7.5%',
  },
})