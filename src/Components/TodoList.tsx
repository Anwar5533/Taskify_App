import React from "react";
import { Todo } from "../Todo";

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC <Props>= ({todos,setTodos}:Props) => {
    return (
        <div className="flex justify-evenly w-9/10 flex-wrap">
            {todos.map((todo) => (
                <li>{todo.todo}</li>
            ))}
        </div>
    );
};

export default TodoList;
