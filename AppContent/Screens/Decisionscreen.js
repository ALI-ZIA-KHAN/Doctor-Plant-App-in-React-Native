

import React, { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {
    SafeAreaView,
    Alert,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';
import Loader from './Loder';





const Decisionscreen = (props) => {

    // console.log("jb",props)

    const result = props.route.params.result.Class_Name
    const imgUpload = props.route.params.imgUpload
    const navigation = props.navigation
    
    const [status,setStatus]=useState(null)

const Chkstatus=(key)=>{
    
    if(key.includes("healthy")){
      
        return "Healthy"
    }else{
    
        return "Diseased"
    }
}

    return (
        <>
  
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center", justifyContent: "center" }}>


             <View style={{marginBottom:15}}>
                 <Text 
                 style={{  
                    fontSize: 25,
                    fontWeight:"bold",
                    color:"#3F8454"
                 }}
                 >{"The Doctor says:"}</Text>
             </View>

                <View style={{ height: 300, width: 300 }}>
                    <Image style={{ height: "100%" }}
                        source={{ uri: imgUpload.uri }} />
                </View>


                <View style={{ alignItems:"center",textAlign: "center", marginTop: 20,width:"80%" }}>
                    <Text style={{  
                        fontSize: 20,
                        fontWeight:"bold",
                        color:"#3F8454"
                    
                    }}>Name :</Text>
         
                </View>
                <View style={{alignItems:"center",textAlign: "center",width:"80%" }}>
                    <Text style={{  
                        fontSize: 20,
                        fontWeight:"bold",
                        fontStyle:"italic",
                     
                         }}>{result?result:"-"}</Text>
                </View>


                <View style={{ alignItems:"center",textAlign: "center", marginTop: 20,width:"80%" }}>
                    <Text style={{ 
                         fontSize: 20,
                         fontWeight:"bold",
                         color:"#3F8454"
                        }}>Status :</Text>
         
                </View>
                <View style={{ alignItems:"center",textAlign: "center",width:"80%" }}>
                    <Text style={{  
                        fontSize: 20,
                        fontWeight:"bold",
                        fontStyle:"italic"
                     }}>
                         {result?(result.includes("healthy")?"Healthy":"Diseased"):"-"}</Text>
                </View>

                <View style={{textAlign:"center",alignItems:"center",marginTop:20}}>
        <TouchableOpacity 
        onPress={()=>{navigation.navigate("Home")}}
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
                    Log Out
            </Text>
        </TouchableOpacity>
    </View>

              
            </ScrollView>
        </SafeAreaView>

</>
    );
  
};



export default Decisionscreen;
