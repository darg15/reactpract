import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter' // se importa entre llaves porque no es export por default
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {text: 'Ajustando elementos a la pantalla', completed: true},
  {text: 'Cositas', completed: false},
  {text: 'Elemento3', completed: false},
  {text: 'Elemento4', completed: false},
  {text: 'Usar estados derivados', completed: true}
]

function App() {

  const[todos, setTodos] = React.useState(defaultTodos); //React.userState() setea por defecto algo
  const [searchValue, setSearchValue /*estos nombres pueden llamarse de cualquier manera*/] = React.useState('')
  console.log('los usuarios todos de ' + searchValue) //Aqui hace muchas impresiones porque lo hace cada vez que se cam = bia el state(cada vez que escriben)

  const searchedTodos = todos.filter(todo =>
      {
        const todoText = todo.text.toLocaleLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        
        return todoText.includes(searchText)}); //Buscando todos dentro de la lista

  const completedTodos = todos.filter(todo => !!todo.completed).length // !! significa doble negacion, y sirve para trabajar con valores true y false
  const totalTodos = todos.length;

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
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

       <CreateTodoButton />
        {/*  esto es reactFragment <> y </> */};
       </> 
      
  );
}




export default App;
