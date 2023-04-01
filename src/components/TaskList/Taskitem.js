import React from 'react'

const Taskitem = ({task,removeTask,setTaskStatus}) => {
  return (
    <li key={task.id} className={task.status === 1? "done" : ""}>
                    <span className ="label">{task.title}</span>
                    <div className="">
                        <input type="checkbox" className ="btn-action btn-action-done" checked={Boolean(task.status)} onChange={(e) => setTaskStatus(task.id, e.target.checked)}/>
                        <button className="btn-action btn-action-delete" onClick={() => removeTask(task.id)}>✖</button>
                    </div>
                </li>
  )
}

export default Taskitem
