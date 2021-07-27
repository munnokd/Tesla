import React from 'react'
import {View,StyleSheet ,FlatList,Dimensions} from 'react-native'
import cars from './cars'
import Car from './Car'

const CarsList = () => {
    return (
        <View style={style.container}>
            <FlatList 
            data={cars}
            renderItem={({item})=><Car car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList

const style=StyleSheet.create({
    container:{
        width: '100%',
    }
})
