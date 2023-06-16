import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Menu from './components/Menu';
import ParticipantPhoto from './components/ParticipantPhotoBubble';
import NumberPhotoBubble from './components/NumberPhotoBubble';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
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
import AdminHome from './screens/AdminHome'


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [menu, setMenu] = useState(true);
  
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

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={menu ? styles.viewWithMenu : styles.viewWithoutMenu}>
        <AdminHome/>
      </View>
      {menu && <Menu style={styles.menu} selected='trophy'/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menu: {
    flex: 0.1
  },
  viewWithMenu:{
    flex:0.9, 
    width:'100%', 
    alignItems:'center', 
    justifyContent:'center'
  },
  viewWithoutMenu:{
    flex:1, 
    width:'100%', 
    alignItems:'center', 
    justifyContent:'center'
  }
});
