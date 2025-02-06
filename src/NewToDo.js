import { CreateToDoButton } from './CreateToDoButton';

function NewToDo() {
    return (
    <>
    <h1>Crear nueva tarea</h1>
    <p>Nombre de la Tarea</p>
    <input className="newToDoInput" placeholder="Ej. Lavar el auto" type="text" />
    <CreateToDoButton />
    </>
    );
}

export { NewToDo };