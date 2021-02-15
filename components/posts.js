

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export const Posts = () => {

  const {navigate} = useNavigation();
  const [postsList, setPostsList] = useState([]);
  const getPosts = async() => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/?userId=1');
    let data = await res.json();
    setPostsList(data);
  }
  
  useEffect(() => {
    getPosts();
  }, [])

  const renderPosts = () => {
    if (postsList.length > 0) {
      return <FlatList
      style={{width: '90%'}}
        data={postsList}
        renderItem={({item}) => {
          return <TouchableOpacity onPress={()=> navigate('postDetails', {id: item.id})} activeOpacity={0.5} style={styles.post}>
            <Text style={{fontWeight: '700', marginBottom: 8}}>{item.title}</Text>
            <Image
              style={{width: 250, height: 250, borderRadius: 8}}
              source={{uri: 'https://source.unsplash.com/random'}}
            />
          </TouchableOpacity>
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    } else {
      return <Text style={{fontSize: 32}}>Loading...</Text>
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={()=> console.log(postsList)} style={{fontSize: 36, paddingHorizontal: 10, paddingVertical: 10}}>
        POSTS
      </Text>
      {renderPosts()}
    </View>
  )
}


const styles = StyleSheet.create({
  post: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#efefef',
    marginVertical: 15,
    backgroundColor: '#fff'
  }
});