import React from 'react';
import { 
  Button,
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
        apiKey: "addfdae0-fa76-449a-aa57-309581942550",
        secret: "yTbohrq8B9b5kl9xuZBgCmI9GHvqKxKkJGw8x1MxMIrngKNvzQhUsvfU9GWXgS37vuJa3CiP"
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const { accessToken, expires, refreshToken } = responseJson;

        Expo.SecureStore.setItemAsync("accessToken", accessToken);
        Expo.SecureStore.setItemAsync("expires", expires);
        Expo.SecureStore.setItemAsync("refreshToken", refreshToken);
  
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
    backgroundColor: '#72B01D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {

  },
  helloText: {
    fontSize: 60,
    fontFamily: 'ibm-plex-mono-bold',
    color: '#fff',
    textAlign: 'center'
  }
});
