import "./ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <>
    <div className="ToDoCounter">
      <h1 className="ToDoCounter-Title" >
        Tus Tareas
      </h1>
      <h2 className="ToDoCounter-Subtitle">
        Has completado {completed} de {total} Tareas
      </h2>
    </div>
    </>
  );
}

export { ToDoCounter };