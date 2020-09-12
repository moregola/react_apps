import React from 'react';
import {View, StyleSheet } from 'react-native';


const Cartao = (props) => {
    // console.log(props.estilos);
    // console.log(estilos);


    return (
        <View style={{...estilos.cartao, ...props.estilos}}>
            {props.children}
        </View> 
    );
};



const estilos = StyleSheet.create({
    cartao: {
        alignItems:"center",
        shadowColor:"black",
        textShadowOffset:{
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0,
        elevation: 4,
        padding: 12,
        borderRadius: 12

    }
});

export default Cartao;