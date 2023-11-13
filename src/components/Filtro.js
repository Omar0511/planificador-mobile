import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../styles';

const Filtro = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Filtrar Gastos</Text>

            <Picker>
                <Picker.Item label='-- Seleccione --' value="" />
                <Picker.Item label='Ahorro' value="ahorro" />
                <Picker.Item label='comida' value="comida" />
                <Picker.Item label='casa' value="casa" />
                <Picker.Item label='gastos' value="gastos" />
                <Picker.Item label='ocio' value="ocio" />
                <Picker.Item label='salud' value="salud" />
                <Picker.Item label='suscipciones' value="suscripciones" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create
(
    {
        contenedor: {
            ...globalStyles.contenedor,
            transform: [ {translateY: 0}],
            marginTop: 70,
        },

        label: {
            fontSize: 22,
            fontWeight: '900',
            color: '#54748B',
        },
    }

);

export default Filtro
