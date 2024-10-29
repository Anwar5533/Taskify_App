import './App.css'
import InputField from './Components/InputField';
import { useState } from 'react';
import { Todo } from './Todo';
import TodoList from './Components/TodoList';



const App: React.FC = () => {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
      console.log(todos)
    }

  }
  console.log(todo);
  return (
      <div className="w-screen h-screen bg-green-800 text-white items-center flex flex-col">
          <span className="text-7xl my-8 z-1 text-center">Taskify</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList todos={todos} setTodos = {setTodos}/>
      </div>
  );
}

export default App
