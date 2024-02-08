import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import Checkbox from 'expo-checkbox';

export const TodoList = memo(({
  todo,
  removeTodo,
  setChecked
}) => {

  return (
    <FlatList
      data={todo}
      renderItem={({item}) => (
        <View style={styles.container}>
            <Text style={[styles.title, { textDecorationLine: item.checked ? 'line-through' : null }]}>{item.title}</Text>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                style={{ width: 24, height: 24, marginRight: 6 }}
                value={item.checked}
                onValueChange={(value) => setChecked(value, item.id)}
                color={item.checked ? '#4630EB' : undefined}
              />

              <TouchableOpacity 
                style={styles.button}
                onPress={() => removeTodo(item.id, item.checked)}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    backgroundColor: 'red',
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
});