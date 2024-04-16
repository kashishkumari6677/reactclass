import React, { useState, useEffect } from "react";
let Service = () => {
    let [task, setTask] = useState('')
    let [taskValue, setTaskValue] = useState([])
    let [passShow, passHide] = useState(false)
    let addTask = async () => {
        // ... spreed operator
        setTaskValue((old) => {
            let newTask = [...(Array.isArray(old) ? old : []), task]
            localStorage.setItem("tasks", JSON.stringify(newTask))
            return newTask;
        })
    }
    let delTask = (i) => {
        let newArr = [...taskValue]
        newArr.splice(i, 1)
        setTaskValue(() => {
            localStorage.setItem("tasks", JSON.stringify(newArr))
            return newArr
        })
    }
    let check = () => {
        let allTask = localStorage.getItem("tasks")
        allTask = JSON.parse(allTask)
        setTaskValue(allTask)
    }
    useEffect(() => {
        check()
    }, [])
    return (<>
        <div>
            <input type="task" placeholder="New task" onChange={(e) => { setTask(e.target.value) }} />
            <button onClick={addTask}>Add</button>
        </div>
        <div className="taskContainer">
            {taskValue === null ? "there are no task" : taskValue.map((v, k) => {
                return (<div key={k}>
                    <h1>{v}</h1>
                    <button onClick={() => { delTask(k) }}>Delete</button>
                </div>)
            })}
        </div>
        <div>
            <input type={passShow ? "text" : "password"} placeholder="Enter your password" />
            <button onClick={() => { passHide(!passShow) }}>Toggle</button>
        </div>
    </>)
}

export default Service