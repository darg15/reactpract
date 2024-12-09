import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter' // se importa entre llaves porque no es export por default
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {text: 'Elemento1', completed: true},
  {text: 'Elemento2', completed: false},
  {text: 'Elemento3', completed: false},
  {text: 'Elemento4', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {/* <TodoItem  />
        <TodoItem />
        <TodoItem /> */}
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

       <CreateTodoButton />
        {/*  esto es reactFragment <> y </> */};
       </> 
      
  );
}




export default App;
