 import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import Newtask from './components/NewTask/Newtask'

function App() {
    const [tasks, setTasks] = useState([
        {id:"task_1", title : "Learn Js", status : 0},
        {id: "task_2", title : "code a Todo List", status : 0},
    ])
    const [showIncomplete, setShowIncomplete] = useState(false)
    const [newTask, setnewTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTask){
            const task = {
                id: Date.now(),
                title: newTask,
                status: 0,
            }
            setTasks([...tasks,task])
            setnewTask("");
        }
    }
    const handleInputchange =(e) => {
        setnewTask(e.target.value)
    }
    const setTaskStatus = (taskId,status) => {
        const incompleteTasks = tasks.map(task =>{
            if(task.id === taskId) {
                return {...task,status : status ? 1 : 0}
            }
            return task})
            setTasks(incompleteTasks);
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }
  return (
    <div>
        <div id = "container">
            <Header/>

            <TaskList 
            tasks={tasks} 
            showIncomplete ={showIncomplete} 
            setTaskStatus={setTaskStatus} 
            removeTask={removeTask} 
            setShowIncomplete ={setShowIncomplete}
            />

            <Newtask
                handleInputchange ={handleInputchange}
                handleSubmit={handleSubmit}
                newTask={newTask}
            />
        </div>
    </div>
  )
}

export default App

//step 1: Build a static version
//step 2: Identify states
//
//- The list of tasks
//- The text of the new task that user has entered
//- the value of the checkbox Show incomplete tasks only
//
//step 3: handling events 
//- form submit for a new task
//- change a task's status
//-Removing a task
//- Toggle show incompleted tasks only