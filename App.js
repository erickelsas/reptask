import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AccountTypeScreen from './screens/AccountTypeScreen';
import AcessHouseScreen from './screens/AcessHouseScreen';
import AdminCadastrarCasaScreen from './screens/AdminCadastrarCasaScreen';
import AdminHome from './screens/AdminHome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/Tabs';
import TabsAdmin from './components/TabsAdmin';
import EditProfileScreen from './screens/EditProfileScreen';

import {AuthContext} from './contexts/AuthContext'
import AwaitingScreen from './screens/AwaitingScreen';
import { EndPointsContext } from './contexts/EndPointsContext';
import { UserContext } from './contexts/UserContext';
import { RepContext } from './contexts/RepContext'
import { AuctionContext } from './contexts/AuctionContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditTaskScreen from './screens/EditTaskScreen';
import StartAuctionScreen from './screens/StartAuctionScreen';
import BidAuctionScreen from './screens/BidAuctionScreen';
import ResultAuctionScreen from './screens/ResultAuctionScreen';

export default function App() {

  
  const authState = useState('');
  const userState = useState({});
  const endpointsState = useState({url:'https://reptaskbackapi.azurewebsites.net/api/'})
  const repState = useState({});
  const auctionState = useState({status:0});

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const getData = async () => {
    if(authState[0] == null){
      return
    }

    try {
      const token = await AsyncStorage.getItem('token');
      const email = await AsyncStorage.getItem('email');

      if (token !== null && email !== null) {
        authState[1](token);
        let res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Users/byemail/${email}`, {
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
              'Authorization':`Bearer ${token}`
          }
        });

        const user = await res.json();

        userState[1](user);

        res = await fetch(`https://reptaskbackapi.azurewebsites.net/api/Houses/${user.id}`, {
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${token}`
        },
        });
      
        const json = await res.json();
  
        repState[1](json);
      }
    } catch (e) {
      console.log(e);
    }
  };

  getData();


  const Stack = createNativeStackNavigator();
  
  return (
        <NavigationContainer>
          <EndPointsContext.Provider value={endpointsState}>
            <AuthContext.Provider value={authState}>
              <UserContext.Provider value={userState}>
                <RepContext.Provider value={repState}>
                  <AuctionContext.Provider value={auctionState}>
                
                    {(userState[0].role != 'NONE' && userState[0] != 'TENANT' && userState[0].role != 'ADMIN') &&                 
                    <Stack.Navigator initialRouteName="Cadastro" screenOptions={{headerShown:false}}>
                        <Stack.Screen name={"Cadastro"} component={SignUpScreen}/>
                        <Stack.Screen name={"Login"} component={LoginScreen} />
                    </Stack.Navigator>}

                    {userState[0].role == 'NONE' &&
                    <Stack.Navigator initialRouteName="Tipo de conta" screenOptions={{headerShown:false}}>
                          <Stack.Screen name={"Tipo de conta"} component={AccountTypeScreen}/>
                          <Stack.Screen name={"Solicitar entrada"} component={AcessHouseScreen}/>
                          <Stack.Screen name={"Criar nova casa"} component={AdminCadastrarCasaScreen}/>
                          <Stack.Screen name={"Esperando"} component={AwaitingScreen}/>
                    </Stack.Navigator>
                    }

                    {(userState[0].role == 'TENANT' || userState[0].role == 'ADMIN') &&
                      <Stack.Navigator initialRouteName={userState[0].role == 'ADMIN' ? 'TabsAdmin':'Tabs'} screenOptions={{headerShown:false}}>
                        <Stack.Group>
                          <Stack.Screen name={"Tabs"} component={Tabs}/>
                          <Stack.Screen name={"TabsAdmin"} component={TabsAdmin}/>
                          <Stack.Screen name={"Editar perfil"} component={EditProfileScreen}/>
                          <Stack.Screen name={"Editar tarefa"} component={EditTaskScreen}/>           
                        </Stack.Group>
                        <Stack.Group>
                          <Stack.Screen name={"Iniciar leilão"} component={StartAuctionScreen}/>           
                          <Stack.Screen name={"Resultado leilão"} component={ResultAuctionScreen}/>           
                          <Stack.Screen name={"Dar lance"} component={BidAuctionScreen}/>           
                        </Stack.Group>
                    </Stack.Navigator>
                    }
                    

                  </AuctionContext.Provider>
                </RepContext.Provider>
              </UserContext.Provider>
            </AuthContext.Provider>
          </EndPointsContext.Provider>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});