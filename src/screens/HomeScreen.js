import { View, StyleSheet } from 'react-native'
import React, { useState, useCallback, useRef } from 'react'
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';

export const HomeScreen = () => {

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');

  const addTodo = useCallback(() => {
    if (text.length > 2) {
        const newTodo = [...todo, {
            title: text,
            id: new Date().getTime().toString(),
            checked: false
        }]
        setTodo(newTodo)
        setText('')
    } else {
        return
    }
  }, [text, todo])

  const removeTodo = useCallback((id, checked) => {
    if (checked) {
        const newTodo = todo.filter((value) => value.id !== id)
        setTodo(newTodo)
        setChecked(false)
    }
  }, [todo])

  const setChecked = (value, id) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.map((item) => {
        if (item.id === id) {
          return { ...item, checked: value };
        }
        return item;
      });
      return updatedTodo;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <TodoForm text={text} addTodo={addTodo} setText={setText}/>
      </View>

      <TodoList todo={todo} removeTodo={removeTodo} setChecked={setChecked} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    formWrapper: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginHorizontal: 20, 
        marginTop: 20
    },
});
