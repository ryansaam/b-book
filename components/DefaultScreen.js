import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { connect } from 'react-redux'

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
    fontSize: 60,
    fontWeight: "900"
  }
})

class ConnectDefaultScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false,
      valueOne: "",
      valueTwo: ""
    }
    this.updateValueOne = this.updateValueOne.bind(this)
    this.updateValueTwo = this.updateValueTwo.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  updateValueOne(text) {
    console.log(text)
    this.setState({valueOne: text})
  }
  updateValueTwo(text) {
    console.log(text)
    this.setState({valueTwo: text})
  }

  onSubmit() {
    const { valueOne, valueTwo } = this.state
    if (valueOne.length > 0 & valueTwo.length > 0 ) {
      this.props.screenProps.logIn()
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{position: "absolute", width: "100%", height: "100%"}} />
        </TouchableWithoutFeedback>
        <Text style={styles.header}>BBook</Text>
        <InputField
          textContentType="emailAddress"
          autoCapitalize="none"
          placeholder="Email"
          handleChange={this.updateValueOne}
          handleSubmit={this.onSubmit}
        />
        <InputField
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password"
          handleChange={this.updateValueTwo}
          handleSubmit={this.onSubmit}
        />
        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <FormButton
            text="Log In"
            onPress={this.onSubmit}
          />
        </View>
        <FormButton text="Sign Up" onPress={() => this.props.navigation.navigate('SignUpOne')} />
      </KeyboardAvoidingView>
    )
  }
}

const DefaultScreen = ConnectDefaultScreen //connect(null, mapDispatchToProps) (ConnectDefaultScreen)

export default DefaultScreen