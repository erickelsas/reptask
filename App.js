import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu style={styles.menu} selected='trophy'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
  }
});
