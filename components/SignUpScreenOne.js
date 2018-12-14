import React, { Component } from "react"
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"
//import { dispatch } from "redux"
import { connect } from "react-redux"

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"

import { setName, SET_FIRST_NAME, SET_LAST_NAME } from "../redux/actions.js"

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setName: (type, text) => {
      dispatch(setName(type, text))
    }
  }
}

class ConnectSignUpScreenOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false
    }
    this.updateValueOne = this.updateValueOne.bind(this)
    this.updateValueTwo = this.updateValueTwo.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { firstName, lastName } = this.props
    if (firstName !== prevProps.firstName) console.log(firstName)
    if (lastName !== prevProps.lastName) console.log(lastName)
    if (firstName.length !== prevProps.firstName.length || lastName.length !== prevProps.lastName.length) {
      if (firstName.length === 0 || lastName.length === 0) {
        this.setState({ bool: false })
      } else if (firstName.length > 0 & lastName.length > 0 ) {
        this.setState({ bool: true })
      }
    }
  }

  updateValueOne(text) {
    this.props.setName(SET_FIRST_NAME, text)
  }
  updateValueTwo(text) {
    this.props.setName(SET_LAST_NAME, text)
  }

  onSubmit() {
    const { firstName, lastName } = this.props
    if (firstName.length > 0 & lastName.length > 0 ) {
      console.log(this.props)
      this.props.navigation.navigate('SignUpTwo')
    }
  }

  render() {
    const { bool } = this.state
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{position: "absolute", width: "100%", height: "100%"}} />
        </TouchableWithoutFeedback>
        <Text style={{ marginBottom: 20, fontSize: 40, fontWeight: "600" }}>Tell us your name</Text>
        <InputField
          placeholder="First Name"
          textContentType="name"
          returnKeyType={bool ? "done" : "next"}
          handleChange={this.updateValueOne}
          handleSubmit={this.onSubmit}
        />
        <InputField
          placeholder="Last Name"
          textContentType="name"
          returnKeyType={bool ? "done" : "next" }
          handleChange={this.updateValueTwo}
          handleSubmit={this.onSubmit}
        />
        <View style={{ marginTop: 20 }}>
          {bool ? <FormButton text="Next" onPress={this.onSubmit}/> :
          <View style={{height: 60}} />}
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const SignUpScreenOne = connect(mapStateToProps, mapDispatchToProps)(ConnectSignUpScreenOne)

export default SignUpScreenOne