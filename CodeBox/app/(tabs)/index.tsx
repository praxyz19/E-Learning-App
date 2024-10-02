import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from '../../Apps/Screen/LoginScreen'

export default function App(){

  const [fontsLoaded] = useFonts({
    'Lora-Bold': require('../../assets/fonts/Lora-Bold.ttf'),
    'Lora-Italic': require('../../assets/fonts/Lora-Italic.ttf'),
    'Lora-Regular': require('../../assets/fonts/Lora-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
   
  },
});