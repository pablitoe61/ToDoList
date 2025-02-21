import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { NewToDo } from './NewToDo';
import { NewToDoImage } from './NewToDoImage';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Escuchar musica', completed: false },
  { text: 'Lala', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = 10;

  console.log('Los usuarios buscaron: ' + searchValue);

  return (
    <>
    <div className="app">
      <div className="newItem">
        <NewToDo />
        <NewToDoImage />
      </div>
      <div className="ListadoTodos">
        <ToDoCounter 
        completed={completedTodos} 
        total={totalTodos} />
        <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <ToDoList>
          {defaultTodos.map(todo => (
            <ToDoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            />
          ))}
        </ToDoList>
      </div>
    </div>
    </>
  );
}

export default App;
