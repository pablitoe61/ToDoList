import {ReactComponent as IconCheck} from './completeIcon.svg';
import {ReactComponent as IconDelete} from './DeleteIcon.svg';

const iconTypes = {
    delete: <IconDelete/>,
    check: <IconCheck/>,
};

function ToDoIcon({type}){
    return(
        <span
        className={`Icon Icon-svg Icon-${type}`}
        >
            {iconTypes[type]}
        </span>
    )
}
    
export { ToDoIcon };