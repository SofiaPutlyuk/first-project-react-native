import React from "react"
import { Text , View , StyleSheet , FlatList , Button } from "react-native"
import { useState } from "react"
const data = [
  {id:"1" , text:"React"},
  {id:"2" , text:"React Native"},
  {id:"3" , text:"Vue"}
]
export default function ListScreen({navigation} : {navigation : any}){
  const [count , setCount] = useState(0)
return(
  <View style={styles.container}>
    <FlatList data={data}
    renderItem={({item}) => <Text>{item.text}</Text>}
    keyExtractor={(item) => item.id}
    />
    <Button color="blue"  title="Add" onPress={() => setCount(count + 1)} />
    <Button color="red" title="Minus" onPress={() => setCount(count - 1)}/>
      <Text>{count}</Text>
   <Button title="To Do" onPress={() => navigation.navigate("To Do")}/>
</View>

)
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"green",
    display:"flex",
    alignItems:"center",
    width:450,
    height:700,
    justifyContent:"center",
    margin:"auto"
  },

})
