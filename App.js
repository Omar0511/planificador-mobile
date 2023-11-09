import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// Importamos el componente
import Header from './src/components/Header';

const App = () => {

  return (
    <View>
      {/* Utilizamos el componente */}
      <Header/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
