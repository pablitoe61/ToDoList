import React from "react";
import { ToDoIcon } from "./ToDoIcon";

function CompleteIcon({completed, onCompleted}) {
    return (
        <ToDoIcon
        type="check"
        color={completed ? "green" : "gray"}
        onClick={onCompleted}
        />
    );
}

export { CompleteIcon };