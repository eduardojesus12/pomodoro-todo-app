import React, { useState } from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { ListTodo } from './components/ListTodo';
import { Status } from './models/enum';
import { TodoModel } from './models/todo';
import { useCountdown } from './hooks/useCountdown';
import { Pomodoro } from './components/Pomodoro';

function App() {

  const initalTime = 1500000;

  const [todoList, setTodoList] = useState<TodoModel[]>([]);
  const [minutes, seconds, playToggleHandler, stopHandler] = useCountdown(initalTime);
  const [currentTodo, setCurrentTodo] = useState<TodoModel>();

  const addTodo = (todo: string) => {
    const newTodo = new TodoModel(Date.now().toString(), todo);
    setTodoList(list => [...list, newTodo]);
  }

  const toggleTodo = (todoId: string, status: Status) => {
      const nextState = todoList.map(todo => {
        return todo.id === todoId 
        ? {...todo, status: status}
        : todo;

      });
      setTodoList(nextState);
  }

  const deleteTodo = (todoId: string) => {
    const nextState = todoList.filter(todo => todo.id !== todoId);
    setTodoList(nextState);
  }

  const setCurrentTodoHandler = (todo: TodoModel) => {
    setCurrentTodo(todo);
    playToggleHandler(true);
  }

  return (
    <div className="App">
     <h1>Pomodoro To-Do</h1>
     <AddTodo onAddTodo={addTodo} />
     <ListTodo 
      todos={todoList.filter(todo => todo.status === Status.Todo)} 
      title={'Todos'} 
      taskCallbacks={
        {
          toggle: toggleTodo,
          delete: deleteTodo,
          setCurrentTodo: setCurrentTodoHandler
        }
      }
      />
     <ListTodo 
      todos={todoList.filter(todo => todo.status === Status.Done)} 
      title={'Done'}
      taskCallbacks={
        {
          toggle: toggleTodo,
          delete: deleteTodo,
          setCurrentTodo: setCurrentTodoHandler
        }
      }
      />
      <Pomodoro todo={currentTodo} minutes={minutes} seconds={seconds} playToggleHandler={playToggleHandler} stopHandler={stopHandler}  />
      
    </div>
  );
}

export default App;
