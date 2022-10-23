import React, { useState } from 'react'
import style from './newtodo.module.css'

function NewTodo(props) {
  const [todo,setTodo] = useState({title:"",description:""});
  const {title,description} = todo;
   
  const changeHandler = (event) =>{
   const name = event.target.name;
   const value = event.target.value;
   setTodo((oldTodo)=>{
    return {...oldTodo,[name]:value}
   });
  }

  const changeSubmit = (event)=>{
    event.preventDefault();
    props.onHandleTodo(todo);
    setTodo({title:"",description:""});
    
  }
  return (
    <form className={style.form} onSubmit={changeSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor='title'>Title: </label>
        <input type="text" id='title' name='title' value={title} onChange={changeHandler}/>
      </div>
      <div className={style["form-field"]}>
        <label htmlFor='description'>Description: </label>
        <textarea type="text" id='description' name='description' value={description} onChange={changeHandler}/>
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo
