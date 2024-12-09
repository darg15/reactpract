import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter' // se importa entre llaves porque no es export por default
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de introduccion a React.js', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'LALALALALALAL', completed: false},
]

function App() {
  return (
    <React.Fragment>
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

    </React.Fragment>
  );
}




export default App;
