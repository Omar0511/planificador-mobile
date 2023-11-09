import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// Importamos el componente
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';

const App = () => {
  const [ isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [ presupuesto, setPresupuesto ] = useState(0);

  const [ gastos, setGatos ] = useState([
    {id: 1, cantidad: 30},
    {id: 2, cantidad: 40},
    {id: 3, cantidad: 50},
  ]);

  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0)
    {
      setIsValidPresupuesto(true)
    }
    else
    {
      Alert.alert
      (
        'Error',
        'El presupuesto no puede ser: 0 o menor',
        [
          {
            text: 'OK',
          }
        ]
      );
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        {/* Utilizamos el componente */}
        <Header/>

        {
          isValidPresupuesto
            ? (
                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  gastos={gastos}
                />
              )
            : (
                <NuevoPresupuesto 
                  presupuesto={presupuesto}
                  setPresupuesto={setPresupuesto}
                  handleNuevoPresupuesto = {handleNuevoPresupuesto}
                />
              )
        }

      </View>
    </View>
  );
};

const styles = StyleSheet.create
(
  {
    contenedor: {
      backgroundColor: '#F5F5F5',
      // Crece todo verticalmente
      flex: 1,
    },

    header: {
      backgroundColor: '#3B82F6',
    },
  }
);

export default App;
