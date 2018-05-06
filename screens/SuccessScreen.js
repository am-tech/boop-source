import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Picker,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class SuccessScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _handleReturnToSelection = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.informationalContainer}>
          <Image
            source={require('../assets/images/boop.png')}
            resizeMode="contain"
            style={[styles.canvas]}
          />
          <Text style={styles.message}>You're all set!</Text>
          <Text style={styles.informationalMessage}>Someone will be with you shortly.</Text>
        </View>
        <Button
            title="Return to selection"
            color="#72B01D"
            onPress={this._handleReturnToSelection}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F7D20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationalContainer: {
    marginBottom: 30,
    width: 300,
    alignItems: 'center'
  },
  canvas: {
    alignItems: 'center',
    width: 80,
    height: 80
  },
  message: {
    fontSize: 60,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ibm-plex-mono-bold',
  },
  informationalMessage: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ibm-plex-mono-light',
  }
});
