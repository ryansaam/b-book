import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const InputField = props => {
  return (
    <View style={styles.textInputContainer} >
      <Text style={styles.textInputLabel} >{props.label}</Text>
      <TextInput 
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={props.handleChange}
        value={props.value}
        textContentType={props.textContentType}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: "80%"
  },
  textInput: {
    width: "100%",
    paddingLeft: 10,
    fontSize: 24,
    borderBottomColor: "#000",
    borderBottomWidth: 2
  },
  textInputLabel: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "400"
  }
})

export default InputField