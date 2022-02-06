import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Card from '../src/components/Card';
import SearchBar from '../src/components/SearchBar/SearchBar';

import products_data from './products_data.json';

const App = () => {
  const [products, setProducts] = useState(products_data);

  const renderProducts = ({item}) => <Card product={item} />;
  const handleSearch = text => {
    const filteredList = products_data.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setProducts(filteredList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.main_title}>PATIKASTORE</Text>
      <SearchBar onChange={handleSearch}></SearchBar>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={products_data}
        renderItem={renderProducts}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },

  main_title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#800080',
  },
});

export default App;
