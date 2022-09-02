import React, { ChangeEvent, useState } from 'react';

interface AddTodoProps {
    onAddTodo: (todo: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({onAddTodo}) => {

    const [todo, setTodo] = useState<string>('');

    const todoSubmitHandler =(event: React.FormEvent) => {
        event.preventDefault();
        if (todo.trim().length === 0) {
            return;
        }

        onAddTodo(todo);
        setTodo('');
    }

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo((event.target as HTMLInputElement).value);
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <input type="text" placeholder='New todo...' onChange={inputHandler} value={todo} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}