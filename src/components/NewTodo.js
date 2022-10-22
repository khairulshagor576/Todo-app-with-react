import React from 'react'
import style from './newtodo.module.css'

function NewTodo() {
  return (
    <form className={style.form}>
      <div className={style["form-field"]}>
        <label htmlFor='title'>Title: </label>
        <input type="text" id='title' name='title'/>
      </div>
      <div className={style["form-field"]}>
        <label htmlFor='description'>Description: </label>
        <textarea type="text" id='title' name='title'/>
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo
