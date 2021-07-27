import React from 'react'
import {View,StyleSheet } from 'react-native'
import CarsList from './Component/CarsList'
import Heade from './Component/Heade'


const App = () => {
  return (
    <View style={style.container}>
      <Heade/>
      <CarsList/>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})




export default App
