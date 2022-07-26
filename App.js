
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import Homescreen from './AppContent/Screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './AppContent/Screens/Login';
import Picturescreen from './AppContent/Screens/Picturescreen';
import Decisionscreen from './AppContent/Screens/Decisionscreen';
import Loader from './AppContent/Screens/Loder';


const Stack = createNativeStackNavigator();

const App = () => {
 


  return (
    <NavigationContainer>
    <Stack.Navigator 
     headerShown={false}
     initialRouteName="Home"
     >


    <Stack.Screen 
        name="Picturescreen" 
        component={Picturescreen} 
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{headerShown:false}}     
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{headerShown:false}}
      />
 <Stack.Screen 
        name="Decisionscreen" 
        component={Decisionscreen} 
        options={{headerShown:false}}
      />

<Stack.Screen 
        name="Loader" 
        component={Loader} 
        options={{headerShown:false}}
      />


    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
