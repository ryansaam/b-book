import React from "react"
import { TouchableHighlight, Text, StyleSheet } from "react-native"

const FormButton = props => {
  return (
    <TouchableHighlight style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>
        {props.text}
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    width: 200,
    height: 60,
    padding: 15,
    borderRadius: 50,
    alignItems: "center"
  },
  buttonText: {
    color: "#a9c2f1",
    fontSize: 20,
    fontWeight: "700"
  }
})

export default FormButton