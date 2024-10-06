import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from '../../Apps/Screen/LoginScreen'
import { ClerkProvider, ClerkLoaded ,SignedIn, SignedOut} from '@clerk/clerk-expo'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './../../Apps/Navigations/TabNavigations';

export default function App(){

  const [fontsLoaded] = useFonts({
    'Lora-Bold': require('../../assets/fonts/Lora-Bold.ttf'),
    'Lora-Italic': require('../../assets/fonts/Lora-Italic.ttf'),
    'Lora-Regular': require('../../assets/fonts/Lora-Regular.ttf'),
  });

  return (
    <ClerkProvider publishableKey={"pk_test_Y29udGVudC1kb2dmaXNoLTc5LmNsZXJrLmFjY291bnRzLmRldiQ"}>
     <View style={styles.container}>
      
      <SignedIn>
        {/* <NavigationContainer> */}
          <TabNavigations/>
        {/* </NavigationContainer> */}
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    </View>
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop:20,
  },
});