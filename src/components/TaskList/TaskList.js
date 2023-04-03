import React from 'react'
import Taskitem from './Taskitem'
import style from './TaskList.module.css'
function TaskList({tasks,showIncomplete,setTaskStatus,removeTask,setShowIncomplete}) {
  
  return (
    <div>
      <ul className={style.task_list}>
                {tasks.filter(task => showIncomplete? task.status !== 1: true).map((task) => (
                <Taskitem
                 task ={task}
                 removeTask ={removeTask}
                 setTaskStatus ={setTaskStatus}
                 />
                ))}

            </ul>
            <div className={style.filter_wrapper}>
                <label htmlFor="filter" className="filter-label">Show imcompleted tasks only</label>
                <input type="checkbox" id="filter" checked ={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)}/>
            </div>
    </div>
  )
}

export default TaskList
