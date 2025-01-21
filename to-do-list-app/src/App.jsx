import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import "./App.css"

export default function App() {
  // keep tasks in array

  const [tasks, setTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([])


  // addTask function, will map a task to the end of the tasks array
  function handleAddTask(task) {
    setTasks([...tasks, {...task, id: Date.now(), time: 0, isActive: true, isCompleted: false}])
    console.log(tasks)
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks)
  }

  function handleUpdateTask(id, updatedTask){
    setTasks((prevTasks) => prevTasks.map((task) => 
    task.id === id ? {...task, ...updatedTask}: task))
    console.log(tasks)
  }

  function handleCompleteTask(id) {
    const completedTask = tasks.filter((task) => task.id === id);
    handleDeleteTask(id);

    setCompleteTasks([...completeTasks, {...completedTask[0], isActive: false, isComplete: true, completedAt: Date.now()}])
    console.log(completeTasks)
  }
  
  
  return (
    <div>
      <header>
        To-Do List
      </header>

      <div className="forms">
        <NewTaskForm onAddTask={handleAddTask}/>
      </div>
      
      <div className="taskArea">
        <TaskList 
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
          onCompleteTask={handleCompleteTask}
          />
      </div>

      <div className="completedTasks"> 
        <CompletedTaskList
          completeTasks ={completeTasks} 
          />
      </div>



    </div>
  )
}

function NewTaskForm( {onAddTask} ) {

  const [title, setTitle] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    if (!title){
      return;
    }

    onAddTask( {title} );
    setTitle("")
  }
  
  return(
    <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="task_name" 
            value= {title}
            onChange = {(e) => setTitle(e.target.value)}
            placeholder="Write new task">
          </input>
          <button type="submit">Add Task</button>
    </form>
  );
}


function TaskList( {tasks, onDeleteTask, onUpdateTask, onCompleteTask}){
  return (
    <>
      {tasks.map((task) => (
        <Task
          key = {task.id}
          task = {task}
          onDeleteTask = {onDeleteTask}
          onUpdateTask = {onUpdateTask}
          onCompleteTask = {onCompleteTask}
        />
        ))}
    </>
  )
}

function Task( {task, onDeleteTask, onUpdateTask, onCompleteTask}) {
  
  useEffect(() => {
    let interval;
    if (task.isActive) {
      interval = setInterval(() => {
        onUpdateTask(task.id, {time: task.time + 1})
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [task.id, task.isActive, task.time, onUpdateTask])
  
  
  return (
    <div>
      <h3>{task.title}</h3>
      <p> Time Elapsed: {task.time}</p>
      <p> Status: {task.isCompleted ? "Complete" : "Ongoing"}</p>
      <button onClick = {() => onDeleteTask(task.id)}>Remove Task</button>
      <button onClick = {() => onCompleteTask(task.id)}>Complete Task</button>
    </div>
  )
}

function CompletedTaskList({completeTasks}){
  const [details, setDetails] = useState({});

  function toggleDetails(taskId) {
    setDetails((prev) => ({
      ...prev, 
      [taskId]: !prev[taskId],
    }));
  }
  
  return(
    <div className="completetaskswrapper">
      <h2>Completed Tasks:</h2>
      <ul>
        {completeTasks.map(({ id, title, time, completedAt }) => (
          <li key={id}>
            <p>{title}</p>
            <button onClick ={() => toggleDetails(id)}>
              {details[id] ? 'Hide Details': 'Show Details'}
            </button>
            {details[id] && (
              <div className="details">
                <p><strong>Time Taken:</strong> {time} seconds</p>
                <p><strong>Date Started:</strong> {new Date(id).toLocaleDateString()} at {new Date(id).toLocaleTimeString()} </p>
                <p><strong>Date Completed:</strong> {new Date(completedAt).toLocaleDateString()} at {new Date(completedAt).toLocaleTimeString()} </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}




