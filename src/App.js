import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { NewToDo } from './NewToDo';
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Escuchar musica', completed: false },
  { text: 'Lala', completed: false },
];

function App() {
  return (
    <>
    <div className="app">
      <div className="newItem">
        <NewToDo />
      </div>
      <div className="ListadoTodos">
        <ToDoCounter />
        <ToDoSearch />
        <ToDoList>
          {todos.map(todo => (
            <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </ToDoList>
      </div>
    </div>
    </>
  );
}

export default App;
