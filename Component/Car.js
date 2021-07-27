import React from 'react'
import { View, Text,StyleSheet, ImageBackground,Dimensions } from 'react-native'
import Button from './Button'

const Car = (props) => {
    const {name,tagline,taglineUnd,image,primary,secondary}=props.car;
    
    return (
        <View style={style.car}>
            <ImageBackground source={image}
                style={style.image}
            />
            <View style={style.titles}>
                <Text style={style.title}>{name}</Text>
                <Text style={style.subTitle}>{tagline}
                <Text style={style.tagline}>{taglineUnd}</Text>
                </Text>
            </View>
            <View style={style.buttonView}>
            {primary ? <Button type="primary"
                text={primary}
                onPress={() => {
                    alert('Your Order has been booked')
                }}
            /> : null}
            {secondary ? <Button type="secondary"
                text={secondary}
                onPress={() => {
                    alert('Your inventory in process')
                }}
            /> : null}
            
            </View>
        </View>
    )
}

export default Car

const style = StyleSheet.create({
    car: {
        width: '100%',
        height: Dimensions.get('window').height,

    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 16,
        color: '#525252',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonView:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    tagline:{
        textDecorationLine:'underline',
    }
})