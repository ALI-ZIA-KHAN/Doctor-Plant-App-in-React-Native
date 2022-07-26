

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
import doctor from '../Api/doctor.png'

import { transactionWithimage } from '../Api/Api';
import Loader from './Loder';


const Picturescreen = ({ navigation }) => {


    const [imgUpload, setimageUpload] = useState("")
    const [status,setStatus]=useState("")
    const [loader,setLoader]=useState(false)


    const galleryOpen = async () => {

        const result = await ImagePicker.launchImageLibrary();
        console.log("res", result)
        setimageUpload(result.assets[0])
    }
    const handleSubmit = async () => {

       

        if (imgUpload === "") {
            Alert.alert("Upload Image Please")
        }

        else {
            setLoader(true)
            const formDatax = new FormData();
            const newImageUri = "file:" + imgUpload.uri.split("file:/").join("");
            console.log(newImageUri)
            const obj = {
                uri: imgUpload.uri,
                type: imgUpload.type,
                name: imgUpload.fileName
                
            }
            console.log(obj)
            formDatax.append("file",
                obj
            );
            try {

                
                const res= await transactionWithimage(formDatax)
                console.log("got result")
                setLoader(false)
                navigation.navigate('Decisionscreen',{result:res.data,imgUpload})

                // console.log(res.data)
                // setStatus(res.data.Class_Name)
                // Alert.alert("Success")
                // console.log("transaction withimage sent")

            } catch (err) {
                Alert.alert("FAILED")
                console.log("error is", err)
            }
        }
    }

    return (
      <>
      {
          loader?
          <Loader/>
          :
          <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" ,justifyContent:"center"}}>

<View style={{alignItems:"center"}}>
  <Image style={{height:300,width:250}}
  source={require('../Api/doctor.png')}/>
</View>

              <View style={{  textAlign: "center", alignItems: "center", marginTop: 20 }}>
                  <TouchableOpacity
                      style={{
                          backgroundColor: "#3F8454",
                          height: 40, width: 120,
                          borderRadius: 10,
                          marginHorizontal: 10,
                          marginVertical:20
                      }}
                      onPress={() => galleryOpen()}
                  >

                      <Text style={{
                          color: "#fff",
                          textAlign: "center",
                          alignItems: "center",
                          paddingVertical: 10,
                          fontWeight: "bold",
                          justifyContent: "center"

                      }}
                      >
                         {imgUpload==""?"Upload Photo":"Photo Uploaded"}
                      </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      style={{
                          backgroundColor: "#3F8454",
                          height: 40,
                           width: 120,
                          borderRadius: 10
                      }}
                      
                      onPress={()=>handleSubmit()}
                      >

                      <Text style={{
                          color: "#fff",
                          textAlign: "center",
                          alignItems: "center",
                          paddingVertical: 10,
                          fontWeight: "bold",
                          justifyContent: "center"
                      }}
                      >
                          Check Status
                      </Text>
                  </TouchableOpacity>
              </View>


          </ScrollView>
      </SafeAreaView>
      }
      </>
    );
};



export default Picturescreen;
