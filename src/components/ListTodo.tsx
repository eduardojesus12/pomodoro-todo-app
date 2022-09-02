import React from 'react';
import { taskCallbacks } from '../interfaces/taskCallbacks';
import { TodoModel } from '../models/todo';
import { Todo } from './Todo';

interface ListTodoProps  {
    todos: TodoModel[];
    title: string;
    taskCallbacks: taskCallbacks;
}

export const ListTodo: React.FC<ListTodoProps> = ({todos, title, taskCallbacks}) => {

    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {
                    todos.map( todo => <Todo key={todo.id} todo={todo} taskCallbacks={taskCallbacks} />)
                }
            </ul>
        </div>
    )
}