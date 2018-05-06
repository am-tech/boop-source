import React from 'react';
import { 
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/boop.png')}
          resizeMode="contain"
          style={[styles.canvas]}
        />
        <View style={styles.login}>
          <Text style={styles.helloText}>Hello!</Text>
          <Button 
            onPress={this._handleLogin}
            title="Log In"
            color="#3F7D20"
            accessibilityLabel="Login to your Boop Account"
          />
        </View>
      </View>
    );
  }

  _handleLogin = () => {
    fetch('https://api.redoxengine.com/auth/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: '7c92264f-1655-4d94-903d-eb918770ea20',
        secret: 'bdwUyFvWGHrwd5seyfYykZKW6TDyoHSc1TbhS6eSe4Uf1MlL9KD63CE0sFxFekqjgcB414VB'
      }),
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        const { accessToken } = responseJson;

        await Expo.SecureStore.setItemAsync("accessToken", accessToken);
  
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.error(error);
      });
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {

  },
  canvas: {
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  helloText: {
    fontSize: 45,
    marginBottom: 50,
    fontFamily: 'ibm-plex-mono-bold',
    color: '#72B01D',
    textAlign: 'center'
  }
});
