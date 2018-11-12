import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { inputUsername } from '../redux/actions.js'

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginBottom: 40,
    fontSize: 60,
    fontWeight: "900"
  }
})

const mapDispatchToProps = dispatch => {
  return { inputUsername: text => dispatch(inputUsername(text)) }
}

const ConnectDefaultScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BBook</Text>
      <InputField
        textContentType="username"
        autoCapitalize="none"
        placeholder="Username"
        handleChange={props.inputUsername}
      />
      <InputField
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry={true}
        placeholder="Password"
        handleChange={props.inputUsername}
      />
      <View style={{ marginBottom: 20, marginTop: 20 }}>
        <FormButton
          text="Log In"
          screen={props.screenProps.logIn}
        />
      </View>
      <FormButton text="Sign Up" screen={() => props.navigation.navigate('SignUpOne')} />
    </View>
  )
}

const DefaultScreen = connect(null, mapDispatchToProps) (ConnectDefaultScreen)

export default DefaultScreen