import React from 'react'

import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'
const dummyTodos = [
  {
    id:1,
    title:"This is todo 1",
    description:"This is Todo first description"
  },
  {
    id:2,
    title:"This is todo 2",
    description:"This is Todo second description"
  }
]
function Home() {
  return (
    <div className={style.container}>
        <h1 style={{ color:"white" }}>Todo App</h1>
        <NewTodo />
        <Todos todos={dummyTodos}/>
    </div>
  )
}

export default Home
