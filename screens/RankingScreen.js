import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileHeader from '../components/ProfileHeader'
import { ScrollView } from 'react-native-gesture-handler'
import AuctionPointsLine from '../components/AuctionPointsLine'
import ParticipantPhotoBubble from '../components/ParticipantPhotoBubble'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo-linear-gradient';
import RequestModalScreen from './RequestModalScreen'

const RankingScreen = ({ route, navigation }) => {
    const [userVector, setUserVector] = useState([{id:0, name: 'Manu', points: 50, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}, {id:1, name: 'Maria Luísa', points: 40, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:2, name: 'Maria Luísa', points: 30, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:3, name: 'Maria Luísa', points: 20, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:4, name: 'Maria Luísa', points: 35, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'},{id:5, name: 'Maria Luísa', points: 5, url: 'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}].sort((a,b) => b.points - a.points));
    const [usersWithoutThree, setUsersWithoutThree] = useState([]);
  
    useEffect(() => {
        setUsersWithoutThree(userVector.slice(3));
    }, [userVector]);

    const [requestModal, setRequestModal] = useState(false);
    
  return (
    <>
        <SafeAreaView style={styles.screen}>
        <ProfileHeader setModalVisible={setRequestModal} navigation={navigation} user={{name:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <View style={{display:'flex', height:'94.5%', paddingTop:'10%'}}>
            <Text style={{fontFamily:'Roboto-Bold', fontSize:24, textAlign:'center', color:'#1E1E1E'}}>
                República Zero Um
            </Text>
            <View style={{display:'flex', width:'90%', alignItems:'flex-start', paddingTop:'10%'}}>
                <Text style={{fontFamily:'Roboto-Medium', fontSize:24, textAlign:'center', color:'#1E1E1E'}}>
                    Ranking
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.podiumContainer}>
                    <View style={styles.podiumCardFirst}>
                        <View style={styles.podiumCardSecond}>
                            <LinearGradient colors={['#36457D', '#36457D']} start={{x:1, y:0}} end={{x:0, y:1}} locations={[.2,0.7]} style={styles.background}/>
                            <View style={styles.podiumCardSecondLeft}>
                                <Text style={styles.medal}>🥈</Text>
                                <Text style={styles.bigText}>2</Text>
                                <ParticipantPhotoBubble index={0} participant={userVector[1]}/>
                                <Text style={styles.bigText}>{userVector[1].name.split(' ')[0]}</Text>
                                <View style={{display:'flex', flexDirection:'row', gap:16 , alignItems:'center'}}>
                                    <IconCommunity name={'star-four-points'} size={14} color={'#FFF'} style={{marginRight:'-15%'}}/>
                                    <Text style={styles.shortText}>{userVector[1].points} pontos</Text>
                                </View>
                                <View style={styles.enough}>

                                </View>
                            </View>
                        </View>

                        <LinearGradient colors={['#1F2C59', '#2B396D']} start={{x:1, y:0}} end={{x:0, y:1}} locations={[.2,0.7]} style={styles.background}/>
                        <Text style={{...styles.medalFirst}}>🥇</Text>
                        <Text style={styles.bigText}>1</Text>
                        <ParticipantPhotoBubble index={0} participant={userVector[0]}/>
                        <Text style={styles.bigText}>{userVector[0].name}</Text>
                        <View style={{display:'flex', flexDirection:'row', gap:16 , alignItems:'center'}}>
                            <IconCommunity name={'star-four-points'} size={14} color={'#FFF'} style={{marginRight:'-9%'}}/>
                            <Text style={styles.shortText}>{userVector[0].points} pontos</Text>
                        </View>

                            <View style={styles.podiumCardThird}>
                                <LinearGradient colors={['#36457D', '#36457D']} start={{x:1, y:0}} end={{x:0, y:1}} locations={[.2,0.7]} style={styles.background}/>
                                <View style={styles.podiumCardThirdRight}>
                                    <Text style={styles.medal}>🥉</Text>
                                    <Text style={styles.bigText}>3</Text>
                                    <ParticipantPhotoBubble index={0} participant={userVector[2]}/>
                                    <Text style={styles.bigText}>{userVector[2].name.split(' ')[0]}</Text>
                                    <View style={{display:'flex', flexDirection:'row', gap:16 , alignItems:'center'}}>
                                        <IconCommunity name={'star-four-points'} size={14} color={'#FFF'} style={{marginRight:'-15%'}}/>
                                        <Text style={styles.shortText}>{userVector[2].points} pontos</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={{width:'95%', paddingLeft:'5%', paddingVertical:'4%', borderRadius: 8, marginBottom:'30%'}}>
                        {usersWithoutThree && usersWithoutThree.map((user, index) => (<View  key={user.id} style={{display:'flex', alignItems:'center', flexDirection:'row', gap:20, marginBottom:'2.5%', paddingLeft:'5%', borderRadius:20}}>
                            <Text style={{fontFamily:'Inter-Bold', fontSize:14, textAlignVertical:'center', lineHeight:14}}>
                                {index+4}
                            </Text>
                            <AuctionPointsLine user={user} isMinimum={false}/>
                        </View>))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
        <RequestModalScreen modalConfig={{modalVisible:requestModal, setModalVisible:setRequestModal}}/>
    </>
    
  )
}

export default RankingScreen

const styles = StyleSheet.create({
    screen:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%'
    },
    podiumContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        elevation:20
    },
    podiumCardFirst:{
        width:'50%',
        height:'65%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        position:'relative',
        elevation:20,
    },
    background:{
        width:'100%',
        height:'100%',
        borderRadius:30,
        position:'absolute'
    },
    medal:{
        fontSize:20,
        marginTop:'-15%'
    },
    medalFirst:{
        fontSize:24,
        marginTop:'-15%',
    },
    bigText:{
        fontSize:16,
        fontFamily:'Roboto-Bold',
        color:'#fff',
        textAlign:'center'
    },
    shortText:{
        fontSize:11,
        fontFamily:'Inter-Regular',
        color:'#fff',
        textAlign:'center'
    },
    podiumCardSecond:{
        width:'115%',
        height:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        position:'absolute',
        zIndex:-1,
        left:'-50%',
        top:'5%'
    },
    podiumCardSecondLeft:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        marginRight:'50%'
    },
    podiumCardThird:{
        width:'115%',
        height:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        position:'absolute',
        zIndex:-2,
        right:'-50%',
        top:'5%',
    },
    podiumCardThirdRight:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        marginLeft:'50%'
    },
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})