import './CreateToDoButton.css';

function CreateToDoButton() {
    return (
        <button className="CreateToDoButton"
        onClick={(event) => {
            console.log('Crear Tarea');
            console.log(event)
        }
        }
        >Crear Tarea</button>
    );
}

export { CreateToDoButton };