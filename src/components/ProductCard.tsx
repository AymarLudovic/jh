import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row', margin: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
      <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{product.name}</Text>
        <Text style={{ fontSize: 16, color: '#888' }}>{product.description}</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{product.price} €</Text>
        <Button title="Add to Cart" onPress={handlePress} />
      </View>
    </View>
  );
};

export default ProductCard;