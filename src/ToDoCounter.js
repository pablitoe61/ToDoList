import { useEffect } from "react";
import "./ToDoCounter.css";
import confetti from 'canvas-confetti';

function ToDoCounter({ total, completed }) {
  useEffect(() => {
    if (total > 0 && completed === total) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [total, completed]);
  let message;
  if (total === 0) {
    message = 'No Tienes Tareas Pendientes';
  } else if (completed === total) {
    message = 'Has Completado Todas Tus Tareas';
  } else {
    message = 'Has Completado ' + completed + ' de ' + total + ' Tareas';
  }
  return (
    <>
    <div className="ToDoCounter">
      <h1 className="ToDoCounter-Title" >
        Tus Tareas
      </h1>
      <h2 className="ToDoCounter-Subtitle">
        {message}
      </h2>
    </div>
    </>
  );
}

export { ToDoCounter };