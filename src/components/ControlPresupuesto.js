import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import globalStyles from '../styles';
import { formatearCantidad } from '../helpers';

const ControlPresupuesto = 
(
    {
        presupuesto
    }
) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.centrarGrafica}>
                <Image 
                    style={styles.imagen}
                    source={ require('../img/grafico.jpg') }
                />
            </View>

            <View style={styles.contenedorTexto}>
                <Text style={styles.valor}>
                    Presupuesto: {''}
                    <Text style={styles.label}>
                        {formatearCantidad(presupuesto)}
                    </Text>
                </Text>

                <Text style={styles.valor}>
                    Disponible: {''}
                    <Text style={styles.label}>
                        {formatearCantidad(presupuesto)}
                    </Text>
                </Text>

                <Text style={styles.valor}>
                    Gastado: {''}
                    <Text style={styles.label}>
                        {formatearCantidad(presupuesto)}
                    </Text>
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create
(
    {
        contenedor: {
            ...globalStyles.contenedor
        },

        centrarGrafica: {
            alignItems: 'center',
        },

        imagen: {
            width: 250,
            height: 250,
        },

        contenedorTexto: {
            marginTop: 50,
        },

        valor: {
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 10,
        },

        label: {
            fontWeight: '700',
            color: '#3B82F6',
        },
    }
)

export default ControlPresupuesto
