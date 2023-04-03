import React from 'react'
import style from './Taskitem.module.css'

const Taskitem = ({task,removeTask,setTaskStatus}) => {
  return (
    <li key={task.id} className={task.status === 1? style.done : ""}>
                    <span className ={style.label}>{task.title}</span>
                    <div className={style.wapper}>
                        <input type="checkbox" className ={style.action_done}checked={Boolean(task.status)} onChange={(e) => setTaskStatus(task.id, e.target.checked)}/>
                        <button className={style.btn_remove} onClick={() => removeTask(task.id)}>✖</button>
                    </div>
                </li>
  )
}

export default Taskitem
