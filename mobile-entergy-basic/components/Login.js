import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  buttonStyle: {
    padding: 15
  },
  formContainer: {
    flex: 2,
    marginBottom: 35
  },
  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default class Login extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground source={require('../assets/entergyLogo.jpg')} style={styles.logoContainer} />

        <KeyboardAvoidingView style={styles.formContainer}>
          <FormLabel>
            Email
          </FormLabel>
          <FormInput
            style={styles.input}
            placeholder="Email"
          />
          <FormLabel>
            PW
          </FormLabel>
          <FormInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
          // onChangeText={this.onPasswordChange.bind(this)}
          />
          <Button
            style={styles.buttonStyle}
            small
            backgroundColor='#000000'
            onPress={() => this.props.navigation.navigate('Devices')}
            title="LOGIN"
          />
          <Button
            style={styles.buttonStyle}
            small
            backgroundColor='#000000'
            onPress={() => this.props.navigation.navigate('Devices')}
            title='SIGNUP'
          />
        </KeyboardAvoidingView>
      </View>
      // </ImageBackground>
    );
  }
}




{/* <View style={styles.container}>
<Text> start workg on your app!</Text>
<Button
  title="Go to Devices"
  onPress={() => this.props.navigation.navigate('Devices')}
/>
</View> */}
