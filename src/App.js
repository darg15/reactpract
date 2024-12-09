import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter' // se importa entre llaves porque no es export por default
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        <TodoItem  />
        <TodoItem />
        <TodoItem />
      </TodoList>

       <CreateTodoButton />

    </div>
  );
}




export default App;
