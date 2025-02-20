import "./NewToDoImage.css";

function NewToDoImage() {
    return (
        <div>
            <img className="ToDoImage" src={require('./task.jpg')} alt="Task Icon"/>
        </div>
    );
}

export { NewToDoImage };