import React, { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
} from 'react-native';
// Importamos el componente
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [ isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [ presupuesto, setPresupuesto ] = useState(0);

  const [ gastos, setGastos ] = useState( [] );

  const [ modal, setModal ] = useState( false );

  const [ gasto, setGasto ] = useState( {} );

  const [ filtro, setFiltro ] = useState( '' );


  const [ gastosFiltrados, setGastosFiltrados ] = useState( '' );

  useEffect( () => {
    const obtenerPresupuestoStorage = async () => {
      try
      {
        const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0;

        if (presupuestoStorage > 0)
        {
          setPresupuesto(presupuestoStorage);
          setIsValidPresupuesto(true);
        }

      }
      catch (error)
      {
        console.log(error);emula
      }
    };

    obtenerPresupuestoStorage();
  }, []);

  // Se puede tener más de un useEffect, es recomendado
  useEffect( () => {
    if (isValidPresupuesto)
    {
      const guardarPresupuestoStorage = async () => {
        try 
        {
          await AsyncStorage.setItem('planificador_presupuesto', presupuesto);
        }
        catch (error)
        {
          console.error(error);
        }
      }
    };

  });

  useEffect( () => {
    const obtenerGastosStorage = async () => {
      try
      {
        const gastosStorage = await AsyncStorage.getItem('planificador_gastos');

        setGastos( gastosStorage ? JSON.parse(gastosStorage) : [] );

        console.log(gastosStorage);
      }
      catch (error)
      {
        console.log(error);
      }

      obtenerGastosStorage();
    };

  }, [] );

  useEffect( () => {
    const guardarGastosStorage = async () => {
      try
      {
        await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastoss));
      }
      catch (error)
      {
        console.log(error);
      }
    };

    guardarGastosStorage();

  }, [gastos]);

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

  const handleGasto = gasto  =>
  {
    // Sin incluye al menos 1 vacío
    if ( [ gasto.nombre, gasto.categoria, gasto.cantidad ].includes('') )
    {
      Alert.alert
      (
        "Error",
        "Todos los campos son obligatorios",
      )

      return
    }

    if (gasto.id)
    {
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState );

      setGastos(gastosActualizados);
    }
    else
    {
      // Añadir el nuevo gasta el STATE
      gasto.id = generarId();
      gasto.fecha = Date.now();

      setGastos( [...gastos, gasto]);
    }

    setModal(!modal);
  };

  const eliminarGasto = id => {
    Alert.alert
    (
      '¿Desdes eliminar el gasto?',
      'Una vez eliminado, no se podrá recuperar...',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Si', onPress: () => {
            const gastosActualizados = gastos.filter( gastoState = gastoState.id !== id);

            setGastos(gastosActualizados);
            setModal(!modal);
            setGasto({});
          } 
        }
      ]
    )
  }

  return (
    <View style={styles.contenedor}>
      <ScrollView>
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

        {
          isValidPresupuesto &&
          (
            <>
              <Filtro
                filtro={filtro}
                setFiltro={setFiltro}
                gastos={gastos}
                setGastosFiltrados={setGastosFiltrados}
              />

              <ListadoGastos 
                gastos={gastos}
                setModal={setModal}
                setGasto={setGasto}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}
              />
            </>
          )
        }
      </ScrollView>

      {
        modal &&
        (
          <Modal 
            animationType='slide'
            visible={modal}
            onRequestClose={
              () => {
                setModal(!modal)
              }
            }
          >
            <FormularioGasto 
              setModal={setModal}
              handleGasto={handleGasto}
              gasto={gasto}
              setGasto={setGasto}
              eliminarGasto={eliminarGasto}
            />
          </Modal>
        )
      }

      {/* && = Cuando el resultado del OPERADOR TERNARIO es TRUE, mostrará el siguiente código */}
      {
        isValidPresupuesto &&
          (
            <Pressable
              style={styles.pressable}
              onPress={ () => setModal(!modal) }
            >
              <Image 
                style={styles.imagen}
                source={ require('./src/img/nuevo-gasto.png') }
              />
            </Pressable>
          )
      }
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
      minHeight: 400,
    },

    pressable: {
      width: 60,
      height: 60,
      position: 'absolute',
      bottom: 40,
      right: 30,
    }, 

    imagen: {
      width: 60,
      height: 60,
    }, 
  }
);

export default App;
