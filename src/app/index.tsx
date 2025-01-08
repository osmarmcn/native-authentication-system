import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";


export default function Login(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>
                    Dev<Text style={{color:Colors.green}}>App</Text>
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor:Colors.zinc
        
    }
   
})