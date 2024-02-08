import { Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

export const TodoForm = memo(({
    text,
    setText,
    addTodo,
}) => {

  return (
    <>
        <TextInput
          placeholder='text todo'
          style={styles.input}
          value={text}
          onChangeText={(e) => setText(e)}
        />

        <TouchableOpacity
            style={styles.button}
            onPress={addTodo}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    </>
  )
})

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, 
        borderColor: 'black', 
        height: 46, 
        width: '75%', 
        paddingLeft: 6
    },
    button: {
        width: '20%', 
        height: 46, 
        backgroundColor: 'black', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white', 
    }
})
