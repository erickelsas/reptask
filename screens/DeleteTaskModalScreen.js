import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PatternButton from '../components/PatternButton'
import PatternModalButton from '../components/PatternModalButton'

const DeleteTaskModalScreen = ({navigation}) => {
    const onPressApagarHandle = () => {

    }

    const onPressCancelarHandle = () => {
        navigation.goBack()
    }
  return (
    <ModalTemplateScreen>
        <View style={{paddingBottom:12}}>
            <Text style={{fontSize:14, fontFamily:'Inter-Bold', textAlign:'center', paddingVertical:16}}>
                Tem certeza que deseja excluir a tarefa selecionada?
            </Text>
            <PatternModalButton buttonConfig={{isRed:true, title:'Apagar tarefa', onPress:onPressApagarHandle}}/>
            <PatternModalButton buttonConfig={{title:'Cancelar', onPress:onPressCancelarHandle}}/>
        </View>
    </ModalTemplateScreen>
  )
}

export default DeleteTaskModalScreen

const styles = StyleSheet.create({})