import { CreateToDoButton } from './CreateToDoButton';
import "./NewToDo.css";

function NewToDo() {
    return (
    <>
    <h1 className="NewToDo-Title">Crear nueva tarea</h1>
    <p className="NewToDo-p" >Nombre de la Tarea</p>
    <input className="NewToDoInput" placeholder="Ej. Lavar el auto" type="text" />
    <CreateToDoButton />
    </>
    );
}

export { NewToDo };