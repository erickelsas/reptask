import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PatternButton from '../components/PatternButton'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import PatternModalButton from '../components/PatternModalButton'

const FinalizeTaskModalScreen = (props) => {
    const onPressConcluirHandle = () => {

    }

  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <View>
            <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Lavar a louça
                    </Text>
                    <View style={styles.points}>
                        <IconCommunity name={'star-four-points'} size={14} color={'#5A5A5A'}/>
                        <Text style={styles.pointsText}>
                            15 pontos
                        </Text>
                    </View>
                </View>
                <PatternModalButton buttonConfig={{title:'Concluir tarefa', onPress:onPressConcluirHandle}}/>
        </View>
    </ModalTemplateScreen>
  )
}

export default FinalizeTaskModalScreen

const styles = StyleSheet.create({
    textContaier:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        fontFamily:'Inter-Bold',
        color:'#1E1E1E',
        textAlign:'center'
    },
    points:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingBottom:10
    },
})