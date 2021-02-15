
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './home';
import { Posts } from './posts';
import { postDetails } from './postDetails';


export const HomeStack = () => {

  const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();

  return(
    <StackNavigator style={{backgroundColor: '#fff'}}>
      <StackScreen options={{
        headerTitle: () => <View style={styles.headTitle} >
        <Text style={{color: '#fff', fontSize: 28, fontWeight: '700'}} >Blogpost</Text>
        <MaterialIcons style={{paddingLeft: 8}} name="article" size={32} color="white" />
        </View>,
        headerStyle: {backgroundColor: '#3f2b96'}
      }} name="home" component={Home}></StackScreen>

      <StackScreen options={{
        headerTitle: () => <View style={styles.headTitle} >
        <Text style={{color: '#fff', fontSize: 28, fontWeight: '700'}} >Blogpost</Text>
        <MaterialIcons style={{paddingLeft: 8}} name="article" size={32} color="white" />
        </View>,
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#3f2b96'}
      }} name="postsList" component={Posts}></StackScreen>
      
      <StackScreen options={{
        headerTitle: () => <View style={styles.headTitle} >
        <Text style={{color: '#fff', fontSize: 28, fontWeight: '700'}} >Details</Text>
        </View>,
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#3f2b96'}
      }} name="postDetails" component={postDetails}></StackScreen>
      
    </StackNavigator>
  )
}

const styles = StyleSheet.create({
  headTitle: {
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  }
});