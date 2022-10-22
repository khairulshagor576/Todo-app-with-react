import React from 'react'
import style from './todo.module.css'

function Todo(props) {
    const {id,title,description} = props.todo;
  return (
   <article className={style.todo}>
            <div>
                 <h3>{title}</h3>
                 <p>{description}</p>
            </div>
            <div>
                 <button className={style.btn}>
                         <i className='fa fa-trash fa-2x'></i>   
                 </button>
            </div>
   </article>
  )
}

export default Todo
