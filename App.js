import React from 'react';
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

const App = () => {

  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0)
    {
      console.log('Presupuesto válido');
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

        <NuevoPresupuesto 
          handleNuevoPresupuesto = {handleNuevoPresupuesto}
        />
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
