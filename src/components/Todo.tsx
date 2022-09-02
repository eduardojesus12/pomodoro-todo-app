import React from 'react';
import { Status } from '../models/enum';
import { TodoModel } from '../models/todo';
import { taskCallbacks } from '../interfaces/taskCallbacks';

interface TodoProps {
    todo: TodoModel;
    taskCallbacks: taskCallbacks;
}


export const Todo: React.FC<TodoProps> = ({todo, taskCallbacks}) => {

    const nextStatus = todo.status === Status.Todo ? Status.Done : Status.Todo;

    const startHandler = () => {
        taskCallbacks.setCurrentTodo(todo);
    }

    return (
        <li>
            <input type="checkbox" onChange={taskCallbacks.toggle.bind(null, todo.id, nextStatus)} />
            <button onClick={startHandler}>play</button>
            {todo.text}
            <button onClick={taskCallbacks.delete.bind(null, todo.id)}>Delete</button>
        </li>
    )
}