// src/screens/SupplierScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

const SupplierScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState('');
  const [suppliers, setSuppliers] = useState([]);

  const addSupplier = () => {
    setSuppliers([
      ...suppliers,
      { name, address, contact, category, image: 'https://reactnative.dev/img/tiny_logo.png' },
    ]);
    setName('');
    setAddress('');
    setContact('');
    setCategory('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Cadastro de Fornecedores</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Endereço"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Contato"
        style={styles.input}
        value={contact}
        onChangeText={setContact}
      />
      <TextInput
        placeholder="Categoria"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      <Button title="Adicionar Fornecedor" onPress={addSupplier} />

      <Text style={styles.header}>Fornecedores Cadastrados</Text>
      {suppliers.map((supplier, index) => (
        <View key={index} style={styles.supplier}>
          <Image source={{ uri: supplier.image }} style={styles.image} />
          <Text style={styles.text}>{supplier.name}</Text>
          <Text style={styles.text}>{supplier.address}</Text>
          <Text style={styles.text}>{supplier.contact}</Text>
          <Text style={styles.text}>{supplier.category}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  supplier: {
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
  },
});

export default SupplierScreen;
