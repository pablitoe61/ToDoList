import "./ToDoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function ToDoItem(props) {
    return (
        <li className={`ToDoItem`}>
            <CompleteIcon
            completed={props.completed}
            onCompleted={props.onCompleted}
            />
            <p className={`ToDoItem-p 
                ${props.completed && 'ToDoItem-p--complete'}`
                }>
                {props.text}
            </p>
            <DeleteIcon
            onDelete={props.onDelete}
            />
        </li>
    );
}

export { ToDoItem };