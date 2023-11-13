import React, { useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from 'react-native';
import globalStyles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NuevoPresupuesto = 
( 
    { 
        presupuesto, 
        setPresupuesto, 
        handleNuevoPresupuesto 
    } 
) => 
{

    useEffect( () => {
        const obtenerAS = async () => {
            const valor = await AsyncStorage.getItem('prueba_As');
            console.log(valor);
        }
        obtenerAS();
    }, []);

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Definir Presupuesto</Text>

            <TextInput
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej. 300'
                style={styles.input}
                value={presupuesto.toString() }
                onChangeText={setPresupuesto}
            />

            <Pressable 
                style={styles.boton}
                onPress={ () => handleNuevoPresupuesto(presupuesto) }
            >
                <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create
(
    {
        contenedor: {
            ...globalStyles.contenedor
        },

        label: {
            textAlign: 'center',
            fontSize: 24,
            color: '#3B82F6',
        },

        input: {
            marginTop: 30,
            backgroundColor: '#F5F5F5',
            padding: 10,
            borderRadius: 10,
            textAlign: 'center',
        },

        boton: {
            marginTop: 30,
            backgroundColor: '#1048A4',
            padding: 10,
            borderRadius: 10,
        },

        botonTexto: {
            textAlign: 'center',
            color: '#FFF',
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
    }
)

export default NuevoPresupuesto
