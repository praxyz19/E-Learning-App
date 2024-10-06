import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import home from '../../assets/images/home.png'
import Colours from '../Utils/Colours'
import googlelogo from '../../assets/images/googlelogo.webp'
import { useOAuth } from '@clerk/clerk-expo'
import { useWarmUpBrowser } from '@/hooks/warmUpBrowser'

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google"});

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if(createdSessionId) {
        setActive({session: createdSessionId });
      }else{
        //
      }

    } catch(err){
      console.error("OAuth error", err);
    }
  }, []);


  return (
    <View style={{display:'flex', alignItems:'center'}}>
      <Image source={home}
        style={{width:250, height:500,
            objectFit:'contain', marginTop:50}} />

        <View style={{height:400, backgroundColor: Colours.PRIMARY, width:'100%' , marginTop:-100, padding:20}}>

            <Text style={{textAlign:'center', 
            fontSize:25, color:Colours.WHITE , fontFamily:'Lora-Bold', marginTop:1}}>CODEBOX</Text>    

            <Text style={{textAlign:'center', fontSize:15, marginTop:20, color:Colours.LIGHT_PRIMARY, fontFamily:'Lora-Regular'}}>Your Ultimate Programming Learning Box</Text>

            <TouchableOpacity
            onPress={onPress}
            style={{backgroundColor:Colours.WHITE, display:'flex', flexDirection:'row', alignItems:'center', gap:10, justifyContent:'center',marginTop:20, padding:10, borderRadius:99}}>
                <Image source={googlelogo}
                style={{width:40, height:40}}/>

                <Text style={{fontSize:18, color:Colours.PRIMARY, fontFamily:'Lora-Regular'}}> Sign In with Google</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}