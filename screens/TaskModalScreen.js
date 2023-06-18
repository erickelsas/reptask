import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalTemplateScreen from './ModalTemplateScreen'
import PatternButton from '../components/PatternButton'
import { TouchableOpacity } from 'react-native'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import PatternModalButton from '../components/PatternModalButton'

const TaskModalScreen = (props) => {
    const onPressConcluirHandle = () => {

    }

    const onPressApagarHandle = () => {

    }

    const onPressEditarHandle = () => {

    }

  return (
    <ModalTemplateScreen modalConfig={props.modalConfig}>
        <View style={{width:'100%', position:'relative', paddingVertical:'7.5%'}}>
            <View style={styles.container}>
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
                <View>
                    <PatternModalButton buttonConfig={{title:'Concluir tarefa', onPress:onPressConcluirHandle}}/>
                    <PatternModalButton buttonConfig={{title:'Apagar tarefa', onPress:onPressApagarHandle, isRed:true}}/>
                </View>
            </View>
            <TouchableOpacity style={styles.editarBtn} onPress={onPressEditarHandle}>
                <Text style={styles.editar}>
                    Editar
                </Text>
            </TouchableOpacity>
        </View>
    </ModalTemplateScreen>
  )
}

export default TaskModalScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center', 
        justifyContent:'center'
    },
    textContaier:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontFamily:'Inter-Bold',
        color:'#1E1E1E'
    },
    points:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    editarBtn:{
        position:'absolute',
        zIndex:2,
        top:'0%',
        right:'2%'
    },
    editar:{
        fontSize:14,
        fontFamily:'Inter-Medium',
        color:'#212B54'
    }

})