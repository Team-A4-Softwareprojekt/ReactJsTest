import React, { useState } from "react"
import styles from "./ToDoList.module.css"

function ToDoList(){

    const [tasks, setTasks] = useState([
        "Eat breakfast", "Take a shower", "Walk the dog"
    ])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(tasks => [...tasks, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    
    function moveTaskUp(index){
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
    }

    return(
    <div className = {styles.toDoList} >
        <h1>To-Do-List</h1>

        <div>
            <input
                type = "text"
                placeHolder = "Enter a task ..."
                value = {newTask}
                onChange = {handleInputChange}
            />
            <button
                className = {styles.addButton}
                onClick={addTask}>
                Add
            </button>

            <ol>
                {tasks.map((task, index) => 
                    <li key = {index}> 
                        <span className = "text"> {task} </span>
                        <button 
                        className = {styles.deleteButton}
                        onClick={() => deleteTask(index)}>
                        Delete
                        </button>

                        <button 
                        className = {styles.moveButton}
                        onClick={() => moveTaskUp(index)}>
                        Up
                        </button>

                        <button 
                        className = {styles.moveButton}
                        onClick={() => moveTaskDown(index)}>
                        Down
                        </button>
                    </li>
                )}
            </ol>
            
        </div>

    </div>
        
    )
}
export default ToDoList