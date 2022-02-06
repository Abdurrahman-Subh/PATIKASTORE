import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.imgURL}}
        style={styles.img}
        resizeMode="contain"></Image>
      <View style={styles.container_info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && (
          <View>
            <Text style={styles.inStockTitle}>STOKTA YOK</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flex: 1,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 5,
  },
  inStockTitle: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Card;
