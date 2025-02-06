import "./ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <>
      <h1 className="ToDoCounter-Title" >
        Tus Tareas
      </h1>
      <h2 className="ToDoCounter-Subtitle">
        Has completado 8{completed} de 10{total} Tareas
      </h2>
    </>
  );
}

export { ToDoCounter };