import React from "react"
import { View, Text, KeyboardAvoidingView } from "react-native"

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"

const SignUpScreenTwo = props => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
      <Text style={{ marginBottom: 20, fontSize: 40, fontWeight: "600", textAlign: "center" }}>
      Enter an email address</Text>
      <InputField
        placeholder="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={{ marginTop: 20 }}>
        <FormButton text="Next" screen={() => props.navigation.navigate('SignUpThree')}/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreenTwo