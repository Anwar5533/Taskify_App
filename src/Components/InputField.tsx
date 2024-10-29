import React, { useRef } from "react";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form
            action=""
            className=" flex w-[90%] relative items-center"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            } 
            }
        >
            <input
            ref = {inputRef}
                type="input"
                placeholder="Enter a task here"
                className="w-full h-16 rounded-3xl text-black transition-all duration-300 px-2 py-4 shadow-inner focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)] "
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="w-14 h-14 px-2 py-4 shadow-lg shadow-gray-400 transition-all duration-200 text-white rounded-full absolute right-0 m-1 border-none text-lg bg-green-700 hover:bg-green-500 active:scale-75 active:shadow-[0_0_5px_black]"
            >
                GO
            </button>
        </form>
    );
};

export default InputField;
