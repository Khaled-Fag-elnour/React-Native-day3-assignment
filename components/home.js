
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export const Home = () => {
  const navigation = useNavigation();
  return(
    <View style={{marginTop: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={()=> navigation.navigate('postsList')} activeOpacity={0.5} style={styles.purpleBtn}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '400'}}>
          Get Posts
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  purpleBtn: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 32,
    backgroundColor: '#3f2b96',
    textTransform: 'uppercase'
  }
});