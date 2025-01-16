
import Colors from "@/constants/Colors";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from "react-native";



export default function index(){

   

    return (
        <View style={styles.container}>
            <ActivityIndicator size={44} color={Colors.green}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor:Colors.zinc,
        justifyContent: 'center',
        alignItems: 'center',
    },
   

   
})