import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]); 

  const addTask = (task) => { 
    setTasks([...tasks, {...task, id: Date.now(), time : 0, isRunning: true, isCompleted: false }]);
  }; // When adding a task, we add it to the task array and have it formatted according to how we wish tasks to look under the hood
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, ...updatedTask} : task)); // updates a task given by mapping it to the array of tasks, also checking if the task is already there, if so it will overwrite the previous task. Otherwise makes new space for itself.
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // deletes task by filtering tasks with a different name from task being deleted, causing deletion
  };

  const completeTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? {...task, isRunning: false, isCompleted: true} : task));
  }


  return (
    <div className ="App">
      <h2>Task Tracker</h2>
      <TaskForm onAddTask={addTask} />
      <TaskList 
      tasks={tasks} 
      onUpdateTask={updateTask} 
      onDeleteTask={deleteTask} 
      onCompleteTask={completeTask}
      />
    </div>
  ) 
}


export default App;




