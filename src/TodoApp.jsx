import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todoApi"


export const TodoApp = () => {
    // const {data:todos=[],isLoading} = useGetTodosQuery();
    const [idTodo, setidTodo] = useState(1)
    const {data:todo,isLoading} = useGetTodoQuery(idTodo);

    const prevTodo = () =>{
        if (idTodo ===1) return;
        setidTodo(idTodo - 1 )
    }
    const nextTodo = () =>{
        setidTodo(idTodo + 1) 
    }

  return (
        <>
            <h1>Todos - rtk query</h1>
            <hr />

            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>
            
            <button onClick={prevTodo}>Prev..</button>
            <button onClick={nextTodo}>Next..</button>
            
            
            
            {/*<ul>
                {todos.map(todo=>(
                    <li key={todo.id}>
                       <strong>{todo.completed? 'done':'pending'}</strong> {todo.title}
                    </li>
                ))}
            </ul>*/}
        </>
  )
}
