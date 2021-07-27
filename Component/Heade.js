import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

const Heade = () => {
    return (
        <View style={style.container}>
            <Image style={style.headerImg} source={require('../Images/logo.png')} />
            <Text style={style.headerMenu}>Menu</Text>
        </View>
    )
}

export default Heade

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    headerImg: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    headerMenu: {
        width: 50,
        height: 25,
        padding: 2,
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderRadius: 10,
        
    }
})