import React from "react";
import { View , Text , StyleSheet } from "react-native";
export default function ToDo(){
    return(
        <View>
            <Text style={styles.text}>Hello</Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    text:{
        color:"black",
        fontSize:32
    }
})