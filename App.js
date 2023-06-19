import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Menu from './components/Menu';
import ParticipantPhoto from './components/ParticipantPhotoBubble';
import NumberPhotoBubble from './components/NumberPhotoBubble';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import BubbleVector from './components/BubbleVector';
import ProfileHeader from './components/ProfileHeader';
import StartAuctionScreen from './screens/StartAuctionScreen';

import ResultAuctionScreen from './screens/ResultAuctionScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AccountTypeScreen from './screens/AccountTypeScreen';
import AcessHouseScreen from './screens/AcessHouseScreen';
import AdminCadastrarCasaScreen from './screens/AdminCadastrarCasaScreen';
import AdminHome from './screens/AdminHome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './components/Tabs';

import {AuthContext} from './contexts/AuthContext'

export default function App() {
  const authHook = useState(true);

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
  const Stack = createNativeStackNavigator();
  
  return (
        <NavigationContainer>
            <AuthContext.Provider value={authHook}>
              {authHook[0] && 
            <Stack.Navigator initialRouteName="Tabs" screenOptions={{headerShown:false}}>
              <Stack.Screen name={"Tabs"} component={Tabs}/>
            </Stack.Navigator>}

              {!authHook[0] &&
                <Stack.Navigator initialRouteName="Cadastro" screenOptions={{headerShown:false}}>
                  <Stack.Screen name={"Cadastro"} component={SignUpScreen}/>
                  <Stack.Screen name={"Login"} component={LoginScreen} />
                  <Stack.Screen name={"Tipo de conta"} component={AccountTypeScreen}/>
                  <Stack.Screen name={"Criar nova casa"} component={AcessHouseScreen}/>
                  <Stack.Screen name={"Solicitar entrada"} component={AdminCadastrarCasaScreen}/>
                </Stack.Navigator>
              }
            </AuthContext.Provider>
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