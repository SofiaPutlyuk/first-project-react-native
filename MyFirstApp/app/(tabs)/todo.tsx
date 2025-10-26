import React from "react";
import { View , Text , StyleSheet } from "react-native";
export default function ToDo(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello from to do screen</Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
     backgroundColor:"red"
    },
    text:{
        color:"black",
        fontSize:32
    }
})