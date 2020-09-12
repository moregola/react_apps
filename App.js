import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,TextInput, Keyboard } from 'react-native';
import PrevisaoItem from './Components/PrevisaoItem';

export default function App() {
  const[cidade, setCidade] = useState('');
  const[previsoes, setPrevisoes] = useState([]);
  const capturarCidade = (cidade) => {setCidade(cidade);
  
  }

  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + cidade + "&appid=" + apiKey;

    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setPrevisoes (dados["list"]);
      Keyboard.dismiss();
    });
  }
  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const apiKey = 'a9c5de696d1f9a0eedbdf5d59cb62315';
  return (
    <View style={estilos.container}>
      <View style={estilos.entrada}>
        <TextInput style={estilos.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}>
        </TextInput>

          <Button title="ok"
            onPress={obterPrevisoes}/>
        
      </View>
      <FlatList
            data={previsoes}
            renderItem={
              previsao => (
                <PrevisaoItem previsao={previsao.item}/>
              )
            }

          />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    padding : 40,
    flexDirection : 'column',
    flex : 1,
    backgroundColor : '#FFF'
  },
  entrada: {
    flexDirection : "row",
    justifyContent : 'space-between',
    marginBottom : 8
  },
  nomeCidade: {
    padding : 12,
    borderBottomColor : "#BB96F3",
    borderBottomWidth : 1,
    textAlign : "left",
    flexGrow : 0.9
  }
  
});
