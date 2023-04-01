import React from 'react'
import style from './Newtask.module.css'

const Newtask = ({handleInputchange,handleSubmit,newTask}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="newitem">Add to do list</label>
                <input type="text" id="newitem" value={newTask} onChange={handleInputchange}/>
                <button type ="submit">Add item</button>
      </form>
    </div>
  )
}

export default Newtask
