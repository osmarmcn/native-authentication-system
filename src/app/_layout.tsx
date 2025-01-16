import {router, Stack} from "expo-router";
import { AuthProvider, userAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";



export default function RootLayout(){
  return(
    <AuthProvider>
      <MainLayout/>
    </AuthProvider>
  )
}
function MainLayout(){


  const {setAuth} = userAuth()

  useEffect(() =>{
    supabase.auth.onAuthStateChange((_event, session) =>{
      // console.log('session user', session?.user)

      if(session){
        setAuth(session.user)
        router.replace('/(tabs)/profile/page')
        return
      }

      setAuth(null)
      router.replace('/(auth)/signin/page')

    })
  },[])

  return (
   <Stack >
      <Stack.Screen
        name="index"
        options={{headerShown:false}} 
      
      
      />
       <Stack.Screen
        name="(auth)/signin/page"
        options={{headerShown:false}} 
      
      
      />
      
      <Stack.Screen
        name="(auth)/signup/page"
        options={{headerShown:false}} 
      
      
      />
      <Stack.Screen
        name="(tabs)/profile/page"
        options={{headerShown:false}} 
      
      
      />

   </Stack>
  )
}