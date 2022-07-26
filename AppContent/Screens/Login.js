import React, { useContext, useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';




const Login = ({navigation}) => {
 
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    const onSubmit=(e)=>{
        console.log(email)
        console.log(password)


        if(email==='ali' && password=="ali123"){
            setEmail("")
            setPassword("")
            navigation.navigate("Picturescreen")

        }else{
           Alert.alert("Oops wrong credentials")
        }
    }


  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView  contentContainerStyle={{flex:1}}>
      

      <View style={{width:"100%",alignItems:"center",marginTop:50}}>
          <Text  style={{ fontSize: 30, fontWeight: "700", color: "#3F8454" }}>Login</Text>
      </View>
    <View style={{width:"100%",alignItems:"center",marginTop:100}}>

    <View style={{width:"80%",textAlign:"center",marginVertical:10}}>
          <TextInput
          placeholder="Email" 
          
          style={{
           
            width: '100%',
            borderWidth: 2,
            marginTop: 15,
            borderColor: '#CFCFCF80',
            borderRadius: 20,
            shadowColor: '#3F84544D',
            color: "black",
            backgroundColor: '#FFFFFF',
            fontWeight:"800",
            height: 50,
            // paddingVertical:5,
            paddingLeft:10,
            fontSize: 13,
            fontFamily: 'Spartan-SemiBold',
             textAlign:"center"  ,
   
            shadowColor: '#3F84544D',
            shadowOffset: {
              width: 2,
              height: 3,
            },
           
            shadowOpacity: 0.4,
            shadowRadius: 0.6,
            elevation: 6,
        }}
          value={email}
          onChangeText={(e)=>{setEmail(e)}}
          />
      </View>

      <View style={{width:"80%",textAlign:"center",marginVertical:5}}>
          <TextInput
          placeholder="Password" 
          style={{
           
            width: '100%',
            borderWidth: 2,
            marginTop: 15,
            borderColor: '#CFCFCF80',
            borderRadius: 20,
            shadowColor: '#3F84544D',
            color: "black",
            backgroundColor: '#FFFFFF',
            fontWeight:"800",
            height: 50,
            // paddingVertical:5,
            paddingLeft:10,
            fontSize: 13,
            fontFamily: 'Spartan-SemiBold',
             textAlign:"center"  ,
   
            shadowColor: '#3F84544D',
            shadowOffset: {
              width: 2,
              height: 3,
            },
           
            shadowOpacity: 0.4,
            shadowRadius: 0.6,
            elevation: 6,
        }}
        
        value={password}
        onChangeText={(e)=>{setPassword(e)}}
        />
      </View>


    </View>
    <View style={{textAlign:"center",alignItems:"center",marginVertical:50}}>
        <TouchableOpacity 
        onPress={()=>onSubmit()}
        style={{
            backgroundColor:"#3F8454", 
            height:40,
            width:120,
            borderRadius:10}}>

            <Text style={{
                color:"#fff",
                textAlign:"center",
                alignItems:"center",
                paddingVertical:10,
                fontWeight:"bold",
                justifyContent:"center"}}
                >
                    Log In
            </Text>
        </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Login;
