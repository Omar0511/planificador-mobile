import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from '../styles';

const Gasto = 
(
    {
        gasto,
    }
) => 
{
    const { nombre, categoria, cantidad, id } = gasto;

    return (
        <View style={styles.contenedor}>
            <Text>{nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create
(
    {
        contenedor: {
            ...globalStyles.contenedor,
            marginBottom: 10,
        },

    }
)

export default Gasto
