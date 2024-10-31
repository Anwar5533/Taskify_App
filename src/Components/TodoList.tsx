import React from "react";
import { Todo } from "../Todo";
import SingleTodo from "./SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="flex flex-col lg:flex-row w-full text-black mt-3 justify-between items-start px-4">
            {/* Active Tasks */}
            <div className="flex flex-col w-full lg:w-[47.5%] mb-4 lg:mb-0 p-4 rounded-lg bg-lime-500">
                <span className="text-lg font-semibold mb-2">Active Tasks</span>
                {todos
                    .filter((todo) => !todo.isDone)
                    .map((todo) => (
                        <SingleTodo
                            todo={todo}
                            key={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))}
            </div>

            {/* Completed Tasks */}
            <div className="flex flex-col w-full lg:w-[47.5%] p-4 rounded-lg bg-lime-500">
                <span className="text-lg font-semibold mb-2">
                    Completed Tasks
                </span>
                {todos
                    .filter((todo) => todo.isDone)
                    .map((todo) => (
                        <SingleTodo
                            todo={todo}
                            key={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))}
            </div>
        </div>
    );
};

export default TodoList;
