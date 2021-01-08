import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function App() {

  let inputText = "no value";

  // samma sak som den nedre
  /*const handleChangeText = (textValue) => {
    inputText = textValue
  }*/

  function handleChangeText(textValue){
    inputText = textValue
  }

  function buttonPressed(){
    console.log(inputText)
  }

  return (
  <View>
    <View style = {{backgroundColor: "#24305E", height: "7%", width: "100%"}}></View>
    <View style = {styles.header}>
      <Text style = {[styles.text, styles.bigFontSize, styles.margin]}>Hello World!</Text>
      <Text style = {styles.text, {fontSize: 22, fontWeight: "500"}}>First React Native App</Text>
      <Text style = {{...styles.text, fontWeight: "normal"}}>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons.</Text>
    </View>
    <View>
    <Text style = {[styles.text, styles.margin]}>What would you like to get out {"\n"}of this course?</Text>
    <TextInput style = {styles.textField}
      multiline={true}
      placeholder = "input answer here"
      onChangeText = {handleChangeText}/>
    <Text style = {[styles.text, styles.margin]}>An emoji describing how you{"\n"} are feeling about this course:</Text>
    <Image style = {{width: 100, height: 100}}
     source={{uri: 'https://www.itpedia.nl/wp-content/uploads/2018/02/Thinking_Face_Emoji.png'}}>
    </Image>
    <Button
      title = "Submit"
      onPress = {buttonPressed}
    />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "26%",
    backgroundColor: "lightblue"
   },
   textField:{
    width: "80%",
    height: 120,
    backgroundColor: "#F2F2F2"
  
   },
   text:{
    fontWeight: "bold",
    fontSize: 18
   },
   bigFontSize:{
    fontSize: 26
   },
   margin: {
     marginTop: 25
   },
});
