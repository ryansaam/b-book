import React, { Component } from "react"
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"
import ErrorMessage from "./ErrorMessage.js"

class SignUpScreenTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false,
      displayError: false,
      valueOne: ""
    }
    this.updateValueOne = this.updateValueOne.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const { valueOne } = this.state
    if (valueOne.length !== prevState.valueOne.length) {
      if (valueOne.length === 0) {
        this.setState({ bool: false, displayError: false })
      } else if (valueOne.length > 0) {
        this.setState({ bool: true })
      }
    }
  }

  updateValueOne(text) {
    console.log(text)
    this.setState({valueOne: text})
  }

  onSubmit() {
    const { valueOne } = this.state
    const validateEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$")
    if (validateEmail.test(valueOne)) {
      if (valueOne.length > 0) {
        this.props.navigation.navigate('SignUpThree')
        this.setState({ displayError: false })
      }
    } else {
      this.setState({ displayError: true })
    }
  }

  render() {
    const { bool, displayError } = this.state
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{position: "absolute", width: "100%", height: "100%"}} />
        </TouchableWithoutFeedback>
        <Text style={{ marginBottom: 20, fontSize: 40, fontWeight: "600", textAlign: "center" }}>Provide an email address</Text>
        <InputField
          placeholder="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType={bool ? "done" : "next"}
          handleChange={this.updateValueOne}
          handleSubmit={this.onSubmit}
        />
        {displayError ? 
          <View style={{marginTop: 5}}>
            <ErrorMessage message="Please enter a valid email"/>
          </View> : null
        }
        <View style={{ marginTop: 20 }}>
          {bool ? <FormButton text="Next" onPress={this.onSubmit}/> :
          <View style={{height: 60}} />}
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default SignUpScreenTwo