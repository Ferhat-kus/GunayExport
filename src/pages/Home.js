import { View, Button } from 'react-native'
import React from 'react'

export default function HomePage({navigation}) {
  return (
    <View>
        <Button 
        title='Gönder'
        onPress={()=> navigation.navigate("SecondPage")}
        />
    </View>
  )
}