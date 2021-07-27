import React from 'react'
import { View,Text,StyleSheet, Pressable } from 'react-native'

const Button = ({type,text,onPress}) => {
    const backgroundColor=type==='primary'?'#454545':'#E8E8E8';
    const color=type==='primary'?'white':'black';

    return (
        <View style={style.container}>
            <Pressable style={[style.button,{backgroundColor:backgroundColor}]} 
            onPress={onPress}
            >
                <Text style={[style.text,{color:color}]}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default Button

const style=StyleSheet.create({
    container:{
        width: '100%',
        padding: 10,

    },
    button:{
        // backgroundColor:,
        height: 40,
        borderRadius:20,
        justifyContent:'center',
        alignItems: 'center',
    },
    text:{
        fontSize:17,
        fontWeight:'500',
        textTransform:'uppercase',
    }
})
