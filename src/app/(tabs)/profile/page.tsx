import { userAuth } from "@/src/context/AuthContext";
import { supabase } from "@/src/lib/supabase";
import { Alert, Button, StyleSheet, Text, View } from "react-native";


export default function Profile(){

    const {setAuth, user} = userAuth()


    async function handleSignout(){
        const {error} = await supabase.auth.signOut()
        setAuth(null)

        if(error) {
            Alert.alert('Error', 'erro ao sair da conta!')
            return
        }
    }
    return (
        <View style={styles.container}>
            <Text>pagina perfil</Text>
            <Text>
                {user?.}
            </Text>

            <Button title="sair" onPress={handleSignout}>

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
   
})