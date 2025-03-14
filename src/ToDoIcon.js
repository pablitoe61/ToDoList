import {ReactComponent as IconCheck} from './completeIcon.svg';
import {ReactComponent as IconDelete} from './delete.svg';
import './ToDoIcon.css';

const iconTypes = {
    "delete": (color) => <IconDelete 
    className="Icon-svg" fill={color}/>,
    "check": (color) => <IconCheck 
    className="Icon-svg" fill={color}/>,
};

function ToDoIcon({type, color, onClick}) {
    return(
        <span
            className={`Icon-container 
            Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}
    
export { ToDoIcon };