import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'

function Home() {
  const [todos,setTodos] = useState([]);
  const handleAddTodo = (todo) =>{
    setTodos((pretodos)=>{
      return [...pretodos,{id:uuidv4(),todo}]
    });
  }
  const onRemoveHandle=(id)=>{
    const filteredTodos = todos.filter((todo)=>todo.id!==id)
    setTodos(filteredTodos);
  }
  return (
    <div className={style.container}>
        <h1 style={{ color:"white" }}>Todo App</h1>
        <NewTodo onHandleTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveHandle={onRemoveHandle}/>
    </div>
  )
}

export default Home
