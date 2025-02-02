import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../redux/actions/cartActions';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddProductToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const handleRemoveProductFromCart = (product) => {
    dispatch(removeProductFromCart(product));
  };

  return (
    <View>
      <Text>ShoppingCart Screen</Text>
      <FlatList
        data={cart.products}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Add" onPress={() => handleAddProductToCart(item)} />
            <Button title="Remove" onPress={() => handleRemoveProductFromCart(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCart;