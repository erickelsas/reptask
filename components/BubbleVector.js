import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ParticipantPhotoBubble from './ParticipantPhotoBubble';
import NumberPhotoBubble from './NumberPhotoBubble';

const BubbleVector = (props) => {
    let count = 0;
    const [participantVectorWithThree, setParticipantVectorWithThree] = useState(props.participantVector.slice(0,3));

    useEffect(() => {
        if(props.participantVector != []){
          setParticipantVectorWithThree(props.participantVector.slice(0, 3));
        }
    }, [props]);

  return (
    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'100%'}}>
        {participantVectorWithThree && participantVectorWithThree.map((participant) => {
           return (<ParticipantPhotoBubble key={participant.id} participant={participant}  isLight={props.isLight != undefined ? 'containerLight':'container'} index={count++}/>)
        })}
        
    {(props.participantVector.length - participantVectorWithThree.length > 0) && <NumberPhotoBubble number={props.participantVector.length - 3} index={3}/>}
  </View>
  )
}

export default BubbleVector

const styles = StyleSheet.create({})