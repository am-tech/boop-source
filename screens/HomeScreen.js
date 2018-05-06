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

const profiles = {
  timothy: require('../profiles/timothy.json'),
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      accessToken: "token",
      expires: "0",
      refreshToken: "refresh",
      establishment: "precisiondental",
      patient: profiles['timothy'],
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
              <Picker.Item label="Precision Dental" value="precisiondental" />
              <Picker.Item label="HACK/HLTH Dentistry" value="hackhlthdentistry" />
              <Picker.Item label="Get Well Soon Clinic" value="getwellsoonclinic" />
              <Picker.Item label="Feel Better Clinic" value="feelbetterclinic" />
            </Picker>
            <Button 
              onPress={this._handleCheckInPress}
              style={[styles.checkInButton]}
              title="Check In"
              color="#3F7D20"
              accessibilityLabel="Check into this establishment"
              />
          </View>
          <View style={[styles.canvas]}>
            <Image
              source={establishments[this.state.establishment]}
              resizeMode="contain"
              style={[styles.canvas]}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleEstablishmentSelection = (itemValue, itemIndex) => {
    this.setState({
      establishment: itemValue
    });
  };

  _handleCheckInPress = () => {
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

        this.setState({
          accessToken,
          expires,
          refreshToken
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

const establishments = {
  feelbetterclinic: require('../assets/images/feelbetterclinic.png'),
  precisiondental: require('../assets/images/precisiondental.png'),
  hackhlthdentistry: require('../assets/images/hackhlthdentistry.png'),
  getwellsoonclinic: require('../assets/images/getwellsoonclinic.png'),
}

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
    color: '#72B01D'
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
    width: 400,
    height: 100,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
