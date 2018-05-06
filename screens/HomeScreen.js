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
      accessToken: "token",
      expires: "0",
      refreshToken: "refresh",
      establishment: "precisiondental",
      patient: {
        "Meta": {
          "DataModel": "PatientAdmin",
          "EventType": "NewPatient",
          "EventDateTime": "2018-05-04T06:22:32.068Z",
          "Test": true,
          "Source": {
            "ID": "7ce6f387-c33c-417d-8682-81e83628cbd9",
            "Name": "Redox Dev Tools"
          },
          "Destinations": [
            {
              "ID": "af394f14-b34a-464f-8d24-895f370af4c9",
              "Name": "Redox EMR"
            }
          ],
          "Message": {
            "ID": 5565
          },
          "Transmission": {
            "ID": 12414
          },
          "FacilityCode": null
        },
        "Patient": {
          "Identifiers": [
            {
              "ID": "0000000001",
              "IDType": "MR"
            },
            {
              "ID": "e167267c-16c9-4fe3-96ae-9cff5703e90a",
              "IDType": "EHRID"
            },
            {
              "ID": "a1d4ee8aba494ca",
              "IDType": "NIST"
            }
          ],
          "Demographics": {
            "FirstName": "Timothy",
            "MiddleName": "Paul",
            "LastName": "Bixby",
            "DOB": "2008-01-06",
            "SSN": "101-01-0001",
            "Sex": "Male",
            "Race": "Asian",
            "IsHispanic": null,
            "MaritalStatus": "Single",
            "IsDeceased": null,
            "DeathDateTime": null,
            "PhoneNumber": {
              "Home": "+18088675301",
              "Office": null,
              "Mobile": null
            },
            "EmailAddresses": [],
            "Language": "en",
            "Citizenship": [],
            "Address": {
              "StreetAddress": "4762 Hickory Street",
              "City": "Monroe",
              "State": "WI",
              "ZIP": "53566",
              "County": "Green",
              "Country": "US"
            }
          },
          "Notes": [],
          "Contacts": [
            {
              "FirstName": "Barbara",
              "MiddleName": null,
              "LastName": "Bixby",
              "Address": {
                "StreetAddress": "4762 Hickory Street",
                "City": "Monroe",
                "State": "WI",
                "ZIP": "53566",
                "County": "Green",
                "Country": "US"
              },
              "PhoneNumber": {
                "Home": "+18088675303",
                "Office": "+17077543758",
                "Mobile": "+19189368865"
              },
              "RelationToPatient": "Mother",
              "EmailAddresses": [
                "barb.bixby@test.net"
              ],
              "Roles": [
                "Emergency Contact"
              ]
            }
          ],
          "Allergies": [
            {
              "Code": "7982",
              "Codeset": "RxNorm",
              "Name": "Penicillin",
              "OnsetDateTime": null,
              "Reaction": [
                {
                  "Code": "28926001",
                  "Codeset": "SNOMED CT",
                  "Name": "Rash"
                },
                {
                  "Code": "247472004",
                  "Codeset": "SNOMED CT",
                  "Name": "Hives"
                }
              ]
            }
          ],
          "PCP": {
            "NPI": "4356789876",
            "ID": "4356789876",
            "IDType": "NPI",
            "FirstName": "Pat",
            "LastName": "Granite",
            "Credentials": [
              "MD"
            ],
            "Address": {
              "StreetAddress": "123 Main St.",
              "City": "Madison",
              "State": "WI",
              "ZIP": "53703",
              "County": "Dane",
              "Country": "USA"
            },
            "Location": {
              "Type": null,
              "Facility": null,
              "Department": null,
              "Room": null
            },
            "PhoneNumber": {
              "Office": "+16085551234"
            }
          },
          "Guarantor": {
            "Number": "10001910",
            "FirstName": "Kent",
            "LastName": "Bixby",
            "DOB": null,
            "Sex": null,
            "Spouse": {
              "FirstName": "Barbara",
              "LastName": "Bixby"
            },
            "Address": {
              "StreetAddress": "4762 Hickory Street",
              "City": "Monroe",
              "State": "WI",
              "ZIP": "53566",
              "County": "Green",
              "Country": "USA"
            },
            "PhoneNumber": {
              "Home": null,
              "Business": null
            },
            "Type": null,
            "RelationToPatient": "Father",
            "Employer": {
              "Name": "Accelerator Labs",
              "Address": {
                "StreetAddress": "1456 Old Sauk Road",
                "City": "Madison",
                "State": "WI",
                "ZIP": "53719",
                "County": "Dane",
                "Country": "USA"
              },
              "PhoneNumber": "+18083451121"
            }
          },
          "Insurances": [
            {
              "Plan": {
                "ID": "31572",
                "IDType": "Payor ID",
                "Name": "HMO Deductable Plan",
                "Type": null
              },
              "MemberNumber": null,
              "Company": {
                "ID": "60054",
                "IDType": null,
                "Name": "aetna (60054 0131)",
                "Address": {
                  "StreetAddress": "PO Box 14080",
                  "City": "Lexington",
                  "State": "KY",
                  "ZIP": "40512-4079",
                  "County": "Fayette",
                  "Country": "US"
                },
                "PhoneNumber": "+18089541123"
              },
              "GroupNumber": "847025-024-0009",
              "GroupName": "Accelerator Labs",
              "EffectiveDate": "2015-01-01",
              "ExpirationDate": "2020-12-31",
              "PolicyNumber": "9140860055",
              "AgreementType": null,
              "CoverageType": null,
              "Insured": {
                "LastName": null,
                "FirstName": null,
                "Relationship": null,
                "DOB": null,
                "Sex": null,
                "Address": {
                  "StreetAddress": null,
                  "City": null,
                  "State": null,
                  "ZIP": null,
                  "County": null,
                  "Country": null
                }
              }
            }
          ]
        }
      }
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
