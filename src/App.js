import { useState } from 'react';
import './App.css';
import {Task} from "./Task.js";

function App() {  

  
  const [todoList, settodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange =(event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task ={
      id: todoList.length === 0? 1 : todoList[todoList.length -1].id +1,
      done: false,
      taskName: newTask
    }
    settodoList([...todoList, task]);
  };
  const deleteTask =(id) => {
    settodoList(todoList.filter((task)=> task.id !== id));
  };
  const changeDone = (id) => {
    settodoList(todoList.map((task) => {
      if(task.id === id){
        return {...task, done: true};
      }
      else{
        return task;
      }
    })
  );
  };

  return (
    <div className="App">
      {/*<User name="pedro" age={21} email="pedro@email.com"/>
      <User name="jake" age={28} email="jake@email.com"/>
      <User name="jill" age={26} email="jill@email.com"/>*/}
      <div className="addTask">
        <input placeholder="Enter your task" onChange={handleChange}/>   
        <button onClick={addTask}> Add Task</button> 
      </div>
      <div className="list">
        { todoList.map((task) =>{
          return <Task taskName={task.taskName} done={task.done} id={task.id} deleteTask={deleteTask} changeDone={changeDone}/>;
          
          
        })
        }
      </div>
      
    </div>
  );
}

{/*const User = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.age} </h1>
      <h1> {props.email}</h1>
    </div>
  )
}*/}
export default App;
