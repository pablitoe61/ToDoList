import "./ToDoSearch.css";


function ToDoSearch() {
  return (
    <>
    <input className="ToDoSearch "
     placeholder="Buscar Tarea..." 
     onChange={event => console.log(event.target)}
     />
    </>
    
  );
}

export { ToDoSearch };