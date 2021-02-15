import { useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";

export const postDetails = () => {
  const [postDetails, setPostDetails] = useState(null)
  const { params: {id} } = useRoute();
  const getDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setPostDetails(data);
    });
  }
  useEffect(()=> {
    getDetails();
  }, [])

  const renderPost = () => {
    if (postDetails === null) {
      console.log('no');
      return <Text style={{fontSize: 32}}>Loading...</Text>
    } else {
      console.log(postDetails);
      return <View style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        width: '90%'
      }}>
        <Text style={{color: '#3f2b96', fontWeight: '700', marginBottom: 8, fontSize: 18}}>Post number: {postDetails.id}</Text>
        <Text style={{fontWeight: '700', marginBottom: 8, fontSize: 18}}>{postDetails.title}</Text>
        <Image
          style={{width: 300, height: 250, borderRadius: 8}}
          source={{uri: 'https://source.unsplash.com/random'}}
        />
        <Text style={{marginTop: 10}}>{postDetails.body}</Text>
        
      </View>
    }
  }

  return(
    <View style={{flex: 1, alignItems: 'center', paddingTop: 15}}>
      {renderPost()}
    </View>
  )
}