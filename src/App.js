import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter' // se importa entre llaves porque no es export por default
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


// const defaultTodos = [
//   {text: 'Ajustando elementos a la pantalla', completed: true},
//   {text: 'Cositas', completed: false},
//   {text: 'Elemento3', completed: false},
//   {text: 'Elemento4', completed: false},
//   {text: 'Usar estados derivados', completed: true}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

function useLocalStorage(itemName, initialValue) {
  //Los hooks de React, empiezan con la nomenclatura de use (useLocalStorage por ejemplo)
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  }
  else{
      parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {
  //const[todos, setTodos] = React.useState(parsedTodos); //React.userState() setea por defecto algo
  const[todos, saveTodos] = useLocalStorage('TODOS_V1', []); 
  const [searchValue, setSearchValue /*estos nombres pueden llamarse de cualquier manera*/] = React.useState('')
  // console.log('los usuarios todos de ' + searchValue) //Aqui hace muchas impresiones porque lo hace cada vez que se cam = bia el state(cada vez que escriben)

  const searchedTodos = todos.filter(todo =>
      {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()

        return todoText.includes(searchText)}); //Buscando todos dentro de la lista

  const completedTodos = todos.filter(todo => !!todo.completed).length // !! significa doble negacion, y sirve para trabajar con valores true y false
  const totalTodos = todos.length;


  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/* <TodoItem  />
        <TodoItem />
        <TodoItem /> */}
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete = { () => completeTodo(todo.text)}
          onDelete = { () => deleteTodo(todo.text)}/>
        ))}
      </TodoList>

       <CreateTodoButton />
        {/*  esto es reactFragment <> y </> */};
       </>

  );
}
export default App;
