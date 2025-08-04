import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image source={require('./assets/Image.png')} style={styles.imagem}></Image>
      <Text style={styles.texto1}>Sthefany Amanda Martins de Moura</Text>
      <View>
        <Text>DADOS PESSOAIS</Text>
        <Text>Endereço: Bairro Perdizes, Birigui-SP</Text>
        <Text>CEP: 16200-137</Text>
        <Text>Idade: 17 anos</Text>
        <Text>Nacionalidade: Brasileira</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 30
  },

  texto1: {
      color: 'black',
      fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
  },
  imagem: {
    marginTop: 20,
    width: '200',
    height: '200',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  quadradoPai: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flex: 1,
    margin: 40,
  }
});

