import "./ToDoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function ToDoItem(props) {
    return (
        <li className={`ToDoItem`}>
            <CompleteIcon/>
            {/* <span className={`Icon Icon-check 
                ${props.completed && 'Icon-check--active'}`}
                onClick={props.onCompleted}
                >
                V
            </span> */}
            <p className={`ToDoItem-p 
                ${props.completed && 'ToDoItem-p--complete'}`
                }>
                {props.text}
            </p>
            <DeleteIcon/>
            {/* <span className={`Icon Icon-delete`}
                onClick={props.onDelete}>
                X
            </span> */}
        </li>
    );
}

export { ToDoItem };