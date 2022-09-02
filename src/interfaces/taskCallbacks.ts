import { Status } from "../models/enum";
import { TodoModel } from "../models/todo";

export interface taskCallbacks {
    toggle: (todoId: string, status: Status) => void;
    delete: (todoId: string) => void;
    setCurrentTodo: (todo: TodoModel) => void;
}