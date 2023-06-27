import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileHeader from '../components/ProfileHeader'
import { ScrollView } from 'react-native-gesture-handler'
import AuctionPointsLine from '../components/AuctionPointsLine'
import ParticipantPhotoBubble from '../components/ParticipantPhotoBubble'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo-linear-gradient';
import RequestModalScreen from './RequestModalScreen'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'
import { RepContext } from '../contexts/RepContext'

const RankingScreen = ({ route, navigation }) => {
    const authState = useContext(AuthContext);
    const userState = useContext(UserContext);
    const repState = useContext(RepContext);


    const [userVector, setUserVector] = useState([]);

    const [usersWithoutThree, setUsersWithoutThree] = useState([]);
  
    useEffect(() => {
        const fetchMoradores = async () => {
            const res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/house/${userState[0].houseId}`, {method:'GET', headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${authState[0]}`,
            }});
    
            const json = await res.json();

            setUserVector(json);
        }

        fetchMoradores();
    }, [])

    useEffect(() => {
        setUsersWithoutThree(userVector.slice(3));
    }, [userVector]);
  return (
    <>
        <SafeAreaView style={styles.screen}>
        <ProfileHeader  navigation={navigation} user={{nickname:'Luísa', url:'https://images.unsplash.com/photo-1638620259400-d2044d2b01d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=540&q=80'}} style={styles.header}/>
        <View style={{display:'flex', height:'94.5%', paddingTop:'10%'}}>
            <Text style={{fontFamily:'Roboto-Bold', fontSize:24, textAlign:'center', color:'#1E1E1E'}}>
                {repState[0].name}
            </Text>
            <View style={{display:'flex', width:'90%', alignItems:'flex-start', paddingTop:'10%'}}>
                <Text style={{fontFamily:'Roboto-Medium', fontSize:24, textAlign:'center', color:'#1E1E1E'}}>
                    Ranking
                </Text>
            </View>
        <View style={styles.container}>
            {userVector.length > 0 && <View style={styles.podiumContainer}>
                    <View style={styles.podiumCardFirst}>
                    {userVector.length > 1 && 
                        <View style={styles.podiumCardSecond}>
                            <LinearGradient colors={['#36457D', '#36457D']} start={{x:1, y:0}} end={{x:0, y:1}} locations={[.2,0.7]} style={styles.background}/>
                            <View style={styles.podiumCardSecondLeft}>
                                <Text style={styles.medal}>🥈</Text>
                                <Text style={styles.bigText}>2</Text>
                                <ParticipantPhotoBubble index={0} participant={userVector[1]}/>
                                <Text style={styles.bigText}>{userVector[1].nickname}</Text>
                                <View style={{display:'flex', flexDirection:'row', gap:16 , alignItems:'center'}}>
                                    <IconCommunity name={'star-four-points'} size={14} color={'#FFF'} style={{marginRight:'-15%'}}/>
                                    <Text style={styles.shortText}>{userVector[1].points} pontos</Text>
                                </View>
                                <View style={styles.enough}>

                                </View>
                            </View>
                        </View>}

                        <LinearGradient colors={['#1F2C59', '#2B396D']} start={{x:1, y:0}} end={{x:0, y:1}} locations={[.2,0.7]} style={styles.background}/>
                        <Text style={{...styles.medalFirst}}>🥇</Text>
                        <Text style={styles.bigText}>1</Text>
                        <ParticipantPhotoBubble index={0} participant={userVector[0]}/>
                        <Text style={styles.bigText}>{userVector[0].nickname}</Text>
                        <View style={{display:'flex', flexDirection:'row', gap:16 , alignItems:'center'}}>
                            <IconCommunity name={'star-four-points'} size={14} color={'#FFF'} style={{marginRight:'-9%'}}/>
                            <Text style={styles.shortText}>{userVector[0].points} pontos</Text>
                        </View>

                            {userVector.length > 2 && <View style={styles.podiumCardThird}>
                                <LinearGradient colors={['#36457D', '#36457D']} start={{x:1, y:0}} end={{x:0, y:1}} locations={[.2,0.7]} style={styles.background}/>
                                <View style={styles.podiumCardThirdRight}>
                                    <Text style={styles.medal}>🥉</Text>
                                    <Text style={styles.bigText}>3</Text>
                                    <ParticipantPhotoBubble index={0} participant={userVector[2]}/>
                                    <Text style={styles.bigText}>{userVector[2].nickname}</Text>
                                    <View style={{display:'flex', flexDirection:'row', gap:16 , alignItems:'center'}}>
                                        <IconCommunity name={'star-four-points'} size={14} color={'#FFF'} style={{marginRight:'-15%'}}/>
                                        <Text style={styles.shortText}>{userVector[2].points} pontos</Text>
                                    </View>
                                </View>
                            </View>}
                        </View>
                    </View>}
                    <ScrollView style={{width:'95%', paddingLeft:'5%', paddingVertical:'4%', borderRadius: 8, marginBottom:'30%'}} showsVerticalScrollIndicator={false}>
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
        elevation:20,
        width:'100%'
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