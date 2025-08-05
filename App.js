import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image source={require('./assets/Image.png')} style={styles.imagem}></Image>
      <Text style={styles.nome}>Sthefany Amanda Martins de Moura</Text>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>DADOS PESSOAIS</Text>
        <Text style={styles.texto}>Endereço: Bairro Perdizes, Birigui-SP</Text>
        <Text style={styles.texto}>CEP: 16200-137</Text>
        <Text style={styles.texto}>Idade: 17 anos</Text>
        <Text style={styles.texto}>Nacionalidade: Brasileira</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>FORMAÇÃO ACADÊMICA</Text>
        <Text style={styles.subtitulo}>Curso Técnico em Desenvolvimento de Sistemas (T.I.) - Escola SENAI "Avak Bedouian"</Text>
        <Text style={styles.texto}>Início: janeiro de 2024 | Previsão de conclusão: dezembro de 2025</Text>
        <Text style={styles.subtitulo}>Escola SESI "Samir Nakad" - Cursando o segundo ano do Ensino Médio</Text>
        <Text style={styles.texto}>Início: janeiro de 2018 | Previsão de conclusão: dezembro de 2025</Text>
        <Text style={styles.subtitulo}>Escola Municipal de Ensino Fundamental Doutor Gama</Text>
        <Text style={styles.texto}>Início: fevereiro de 2012 | Conclusão: dezembro de 2017</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>EXPERIÊNCIAS PROFISSIONAIS</Text>
        <Text style={styles.subtitulo}>Pequito Calçados</Text>
        <Text style={styles.texto}>Período: Atualmente</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>HABILIDADES INTERPESSOAIS</Text>
        <Text style={styles.texto}>Capacidade de trabalho em equipe.</Text>
        <Text style={styles.texto}>Espírito de liderança.</Text>
        <Text style={styles.texto}>Proatividade.</Text>
        <Text style={styles.texto}>Resiliência.</Text>
        <Text style={styles.texto}>Criatividade.</Text>
        <Text style={styles.texto}>Empatia.</Text>
        <Text style={styles.texto}>Capacidade de resolução de conflitos.</Text>
        <Text style={styles.texto}>Comprometimento.</Text>
        <Text style={styles.texto}>Pensamento crítico.</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>IDIOMAS</Text>
        <Text style={styles.texto}>Português fluente (Nativo).</Text>
        <Text style={styles.texto}>Inglês Intermediário.</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  nome: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    paddingTop: 15,
    paddingBottom: 15,
  },

  bloco: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  titulo: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
  },

  subtitulo: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  texto: {
    color: 'black',
    fontSize: 15,
  },

  imagem: {
    marginTop: 20,
    width: 250,
    height: 250,
    borderRadius: 140,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },

});

