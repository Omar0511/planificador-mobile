import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import globalStyles from '../styles';
import { formatearCantidad } from '../helpers';

const ControlPresupuesto = 
(
    {
        presupuesto,
        gastos,
        resetearApp,
    }
) => 
{

    const [ disponible, setDisponible ] = useState(0);

    const [ gastado, setGastado ] = useState(0);

    const [ porcentaje, setPorcentaje ] = useState(0);

    useEffect( () => {
        // El 0 es valor inicial
        const totalGastado = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0 );

        const totalDisponible = presupuesto - totalGastado;

        const nuevoPorcentaje = (
            ( (presupuesto - totalDisponible) / presupuesto ) * 100
        );

        setPorcentaje(nuevoPorcentaje);
        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos] );

    return (
        <View style={styles.contenedor}>
            <View style={styles.centrarGrafica}>
                <Image 
                    style={styles.imagen}
                    source={ require('../img/grafico.jpg') }
                />
                <Text>Porcentaje: %{porcentaje.toFixed(2)}</Text>
            </View>

            <View style={styles.contenedorTexto}>
                <Pressable 
                    onLongPress={resetearApp}
                    style={styles.boton}
                >
                    <Text style={styles.textoBoton}>Reiniciar App</Text>
                </Pressable>

                <Text style={styles.label}>
                    Presupuesto: {''}
                    <Text style={styles.valor}>
                        {formatearCantidad(presupuesto)}
                    </Text>
                </Text>

                <Text style={styles.label}>
                    Disponible: {''}
                    <Text style={styles.valor}>
                        {formatearCantidad(disponible)}
                    </Text>
                </Text>

                <Text style={styles.label}>
                    Gastado: {''}
                    <Text style={styles.valor}>
                        {formatearCantidad(gastado)}
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

        boton: {
            backgroundColor: '#DB2777',
            padding: 10,
            marginBottom: 40,
            borderRadius: 5,
        },

        textoBoton: {
            textAlign: 'center',
            color: '#FFF',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },

        imagen: {
            width: 250,
            height: 250,
        },

        contenedorTexto: {
            marginTop: 50,
        },

        label: {
            fontWeight: '700',
            fontSize: 24,
            color: '#3B82F6',
            textAlign: 'center',
            marginBottom: 10,
        },

        valor: {
            fontWeight: '400',
            color: '#000',
        },
    }
)

export default ControlPresupuesto
