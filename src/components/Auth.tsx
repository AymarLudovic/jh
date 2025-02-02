import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

const Auth = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        navigation.navigate('Home');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    auth.signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
        navigation.navigate('Auth');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <Text>Auth Screen</Text>
      {user ? (
        <Button title="Sign Out" onPress={handleSignOut} />
      ) : (
        <Button title="Sign In" onPress={handleSignIn} />
      )}
    </View>
  );
};

export default Auth;