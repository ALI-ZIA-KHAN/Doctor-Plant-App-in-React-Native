import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
// import {Globalcolor} from '../../../Constants/Colors';
// import {FontFamily} from '../../../Constants/FontFamily';
// import {Fontstyles} from '../../../Constants/FontStyle';
import {useState, useEffect} from 'react';

const Loader = ({navigation,result}) => {
  const [firstDot, setfirstDot] = useState(0);

  useEffect(()=>{
     
    setInterval(()=>{
        setfirstDot(prev => (prev+1)%3)
       },500)
    
  },[])

  return (
    <>
      <SafeAreaView>
        <View style={styles.loaderDiv}>
          <Text
            style={[{fontWeight:"800",fontSize:20},styles.loadingText]}>
            Dr. Checking
          </Text>
          <View style={styles.dotDiv}>
            <View style={firstDot == 0 ? styles.dotGreen : styles.dotWhite}></View>

            <View style={firstDot == 1 ? styles.dotGreen : styles.dotWhite}></View>
            <View style={firstDot == 2 ? styles.dotGreen : styles.dotWhite}></View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  loaderDiv: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100%',
  },
  loadingText: {
    color: '#3F8454',
    textAlign: 'center',
  },
  dotDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '12%',
    marginTop: 10,
  },
  dotGreen: {
    width: 10,
    height: 10,
    backgroundColor: '#3F8454',
    borderRadius: 10,
  },
  dotWhite: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default Loader;
