import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const PatternButton = (props) => {

  return (
    <View>
      <Button style={styles.blueButton}> {props.children}</Button>
    </View>
  )
}

export default PatternButton

const styles = StyleSheet.create({
    blueButton: {
        backgroundColor: '#36457D',
        color: '#f2f3f4',
        width: 60,
        height: 5,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
    }
})