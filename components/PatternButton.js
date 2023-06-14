import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const PatternButton = (props) => {

  return (
    <View>
      <Button style={styles.blueButton} color="#36457D" title={props.buttonConfig.title} onPress={props.onPressButton}></Button>
    </View>
  )
}

export default PatternButton

const styles = StyleSheet.create({
    blueButton: {
        color: '#f2f3f4',
        width: '100%',
        borderRadius: 2,
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
    }
})