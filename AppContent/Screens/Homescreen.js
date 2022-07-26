import React, { useEffect} from 'react';
import {StyleSheet,Text, SafeAreaView,View, Image} from 'react-native';


const HomeScreen = ({navigation}) => {
 
  const getData = async () => {
         
  };


  return (
    <>
      <SafeAreaView style={styles.container}>
          <View style={{backgroundColor:"white",height:300,width:180}}>
              <Image style={{height:"100%"}} source={{uri:"https://i.pinimg.com/originals/3e/41/9d/3e419de254373fda06cd9a8213f77366.gif"}}></Image>
          </View>
          <View style={{marginBottom:30}}>
          <Text style={{ fontSize: 45, fontWeight: "700", color: "#3F8454" }}>Dr. Plant</Text>
          </View>
      
      <View style={{marginVertical:30}}
    
      >
      <Text
        onPress={()=>{navigation.navigate("Login")}}
       style={{ fontSize: 20, fontWeight: "500", color: '#3F8454' }}>Click to Sign In</Text>
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default HomeScreen;
