import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()
const MaterialTopTabs = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator style={{paddingTop:40}}>
        <BottomTab.Screen name="home" component={Home} options={{headerShown:false}} />
        <BottomTab.Screen name="screen1" component={Screen1} />
        <BottomTab.Screen name="screen2" component={Screen2} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}){
  return (
    <View style={styles.container}>
        <Text>Домашний экран</Text>
        <Button title='Экран 1' onPress={() => navigation.navigate('screen1')} />
        <Button title='Экран 2' onPress={() => navigation.navigate('screen2')} />
    </View>
  )
}

function Screen1({navigation}){
  return (
    <View style={styles.container}>
        <Text>Экран 1</Text>
        <Pressable onPress={() => navigation.navigate('screen2')}>
          <View style={{width:200, height:50, backgroundColor:'black', alignItems:'center', justifyContent:'center', borderRadius:10}}>
            <Text style={{color:'white', fontSize:24}}>Переход</Text>
          </View>
        </Pressable>
    </View>
  )
}

function Screen2({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name='screen2_1' component={Screen2_1} />
      <Stack.Screen name='screen2_2' component={Screen2_2} />
    </Stack.Navigator>
  )
}

function Screen2_1({navigation}){
  return (
    <View style={styles.container}>
      <Text>Экран 2_1</Text>
      <Button title='Экран 2_2' onPress={() => navigation.navigate('screen2_2')} />
  </View>
  )
}

function Screen2_2(){
  return (
    <View style={styles.container}>
      <Text>Экран 2_2</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
