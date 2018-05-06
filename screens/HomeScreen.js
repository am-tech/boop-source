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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      establishment: null,
      patient: profiles['barbara'],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.checkInPromptText}>Which establishment are we checking into?</Text>
            <Picker
              selectedValue={this.state.establishment}
              style={[styles.establishmentSelection]}
              onValueChange={this._handleEstablishmentSelection}>
              <Picker.Item label='Please select an option...' value='no-selection' />
              <Picker.Item label="Precision Dental" value="precisiondental" />
              <Picker.Item label="Las Vegas Dentistry" value="lasvegasdentistry" />
              <Picker.Item label="Absolute Dental" value="absolutedental" />
            </Picker>
            <Button 
              onPress={this._handleCheckInPress}
              style={[styles.checkInButton]}
              title={!this.state.isLoading ? "Check In" : "Checking In..."}
              color="#3F7D20"
              disabled={!this.state.establishment || this.state.isLoading}
              accessibilityLabel="Check into this establishment"
              />
          </View>
          <View style={[styles.canvas]}>
            <Image
              source={this.state.establishment 
                ? establishments[this.state.establishment].uri 
                : require('../assets/images/default.png')}
              resizeMode="contain"
              style={[styles.canvas]}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleEstablishmentSelection = (itemValue) => {
    if (itemValue !== 'no-selection') {
      this.setState({
        establishment: itemValue
      });
    }
  };

  _handleCheckInPress = async () => {
    const accessToken = await Expo.SecureStore.getItemAsync("accessToken");
    const payload = this.state.patient;

    payload.Meta.Destinations = [
      {
        ID: establishments[this.state.establishment].id,
        Name: 'HackHLTH2018',
      },
    ];

    try {
      this.setState({ isLoading: true });
      const response = await fetch('https://api.redoxengine.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      this.props.navigation.navigate('Success');
    } catch (e) {
      console.warn('uh oh!', e);
    } finally {
      this.setState({ isLoading: false });
    }
  };
}

const establishments = {
  lasvegasdentistry: {
    uri: require('../assets/images/lasvegasdentistry.png'),
    id: 'f91b0c80-8038-404c-996a-c19d81fc8133',
  },
  precisiondental: {
    uri: require('../assets/images/precisiondental.png'),
    id: 'f91b0c80-8038-404c-996a-c19d81fc8133',
  },
  absolutedental: {
    uri: require('../assets/images/absolutedental.png'),
    id: 'f91b0c80-8038-404c-996a-c19d81fc8133',
  },
};

const profiles = {
  timothy: require('../profiles/timothy.json'),
  barbara: require('../profiles/barbara.json'),
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  checkInPromptText: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    color: '#72B01D',
    fontFamily: 'ibm-plex-mono-light',
  },
  canvas: {
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  fullEstablishmentSplash: {
    resizeMode: 'contain',
  },
  establishmentSelection: {
    alignItems: 'center',
    width: 350,
    height: 100,
  },
});
