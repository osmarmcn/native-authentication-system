import Colors from "@/constants/Colors";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function Login(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoText}>
                    Dev<Text style={{color:Colors.green}}>App</Text>
                </Text>
                <Text style={styles.slogan}>
                    o  Futuro da programação
                </Text>

            </View>

            <View style={styles.form}>
                <View>
                    <Text>email</Text>
                    <TextInput
                        placeholder="Digite seu email..."
                        style={styles.input}
                    
                    />
                </View>
                <View>
                    <Text style={styles.label}>senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={styles.input}
                    
                    />
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor:Colors.zinc 
    },
    header: {
        paddingLeft:14,
        paddingRight:14,
        
    },
    logoText: {
        fontSize:20,
        fontWeight:'bold',
        color:Colors.white,
        marginBottom:8,
    },
    slogan: {
        fontSize:36,
        color:Colors.white,
        marginBottom:34,
    },
    label:{
        color:Colors.zinc,
        marginBottom:4,
    },
    form:{
        flex:1,
        backgroundColor:Colors.white,
        paddingTop:24,
        paddingLeft:14,
        paddingRight:14,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,

    },
    input:{
        borderWidth:1,
        borderColor:Colors.gray,
        borderRadius:8,
        marginBottom:16,
        paddingHorizontal:8,
        paddingTop:14,
        paddingBottom:14,

    },
    button:{
        backgroundColor:Colors.green,
        paddingTop:14,
        paddingBottom:14,
        justifyContent:'center',
        alignItems:"center",
        width:'100%',
        borderRadius:8,
    },
    buttonText:{
        color:Colors.zinc,
        fontSize:16,
        fontWeight:'bold',

    }


   
})