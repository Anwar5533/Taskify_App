import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../Todo";
import { MdModeEdit, MdDelete, MdFileDownloadDone } from "react-icons/md";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form
            className="flex w-full max-w-[90%] sm:max-w-[650px] md:max-w-[900px] lg:max-w-[540px] rounded-md p-4 text-black relative mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-lg transition duration-200 hover:shadow-lg hover:shadow-black"
            onSubmit={(e) => handleEdit(e, todo.id)}
        >
            {edit ? (
                <input
                    ref={inputRef}
                    placeholder={todo.todo}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="w-full p-2 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            ) : todo.isDone ? (
                <s className="flex-1 border-none text-lg sm:text-xl text-gray-800">
                    {todo.todo}
                </s>
            ) : (
                <span className="flex-1 border-none text-lg sm:text-xl text-black">
                    {todo.todo}
                </span>
            )}

            <div className="flex text-lg sm:text-xl absolute right-0 mr-4">
                <span
                    className="pr-3 cursor-pointer hover:text-yellow-500 transition-colors"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <MdModeEdit />
                </span>
                <span
                    className="pr-3 cursor-pointer hover:text-red-500 transition-colors"
                    onClick={() => handleDelete(todo.id)}
                >
                    <MdDelete />
                </span>
                <span
                    className="cursor-pointer hover:text-green-500 transition-colors"
                    onClick={() => handleDone(todo.id)}
                >
                    <MdFileDownloadDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
