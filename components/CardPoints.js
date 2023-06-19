import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Star from   '../assets/images/whitestar.svg'


const icon = (iconName, size, color) => {
  return <Icon name={iconName} size={size} color={color}/>
}

const CardPoints = (props) => {
  return (
    <View style={styles.containter}>
      <LinearGradient colors={['#24305F', '#202A4C']} start={{x:1, y:1}} end={{x:1, y:0}} locations={[.2,0.7]} style={styles.background}>
          <View style={styles.pointsView}>
            <Star style={{marginRight: '2%'}}/>
            <Text style={styles.pointsText}> {props.text.pontos} Pontos</Text>
          </View>
          <Text style={styles.concluidasText}>{props.text.concluidas} tarefas concluidas</Text>
      </LinearGradient>
    </View>
  )
}

export default CardPoints

const styles = StyleSheet.create({
    containter:{
        width: '100%',
        marginTop: '8%',
    },
    background:{
        width:'100%',

        padding: 30,
        borderRadius: 20,
        
        display: 'flex',
        alignItems:'center'
    },
    pointsView:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    pointsText:{
      fontFamily:'Roboto-Medium',
      fontSize:24,
      color: '#FFFFFF',
    },
    concluidasText:{
      fontFamily:'Inter-Regular',
      fontSize:16,
      color: '#FFFFFF',
      marginTop: '2%'
    }
})