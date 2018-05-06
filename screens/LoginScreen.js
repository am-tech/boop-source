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
  // static navigationOptions = {
  //   title: 'Links',
  // };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.helloText}>Hello!</Text>
          <Button 
              onPress={this._handleLogin}
              title="Log In"
              color="#3F7D20"
              accessibilityLabel="Login to your Boop Account"
            />
        </View>
      </ScrollView>
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
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
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
  },
  helloText: {
    fontSize: 60,
    fontFamily: 'ibm-plex-mono-bold',
    color: '#fff',
    textAlign: 'center'
  }
});
