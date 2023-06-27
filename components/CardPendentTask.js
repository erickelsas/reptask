import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
import BubbleVector from '../components/BubbleVector'

const icon = (iconName, size, color) => {
  return <Icon name={iconName} size={size} color={color}/>
}

const CardPendentTask = (props) => {
  return (
    <View style={styles.containter}>
      <LinearGradient colors={['#24305F', '#202A4C']} start={{x:1, y:1}} end={{x:1, y:0}} locations={[.2,0.7]} style={styles.background}>
        <View style={styles.content}>
          <View style={styles.upCard}>
            <Text style={styles.title}>{props.text.repname}</Text>
            <View style={styles.containerPendents}>
                <View style={styles.pendent}>
                  <View style={styles.icon}>
                  {icon('check-circle', 16, '#FFFFFF')}
                  </View>
                  <Text style={styles.pendentsNumber}> {props.text.check}   </Text>
                </View>

                <View style={styles.pendent}>
                  <View style={styles.iconPosition}>
                  {icon('times-circle', 16, '#FFFFFF')}
                  </View>
                  <Text style={styles.pendentsNumber}> {props.text.uncheck}</Text>
                </View>
            </View>
          </View>
          <BubbleVector participantVector={props.moradores}/>
        </View>
      </LinearGradient>
    </View>
  )
}

export default CardPendentTask

const styles = StyleSheet.create({
    containter:{
        width: '100%',
        height:'25%',
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    background:{
        width:'100%',
        height:'100%',
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    content:{
      width: '100%',
      height: '100%',

      paddingTop: '5%',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingBottom: '8%',

      display: 'flex',
      justifyContent: 'space-between',
    },
    upCard:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:  'space-between',

    },
    title:{
      fontFamily:'Roboto-Bold',
      textAlign:'center',
      fontSize:22,
      color:'#fff',
    },
    containerPendents:{
      display: 'flex',
      flexDirection: 'row',
    },
    pendent:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconPosition:{
      
    },
    pendentsNumber:{
      fontFamily: 'Roboto-Medium',
      textAlign:'center',
      fontSize:16,
      color:'#fff',
    },

})