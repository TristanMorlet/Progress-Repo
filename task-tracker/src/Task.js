import React, { useEffect } from 'react';

export default function Task({ task, onUpdateTask, onDeleteTask, onCompleteTask }) {
    
    useEffect(() => {
        let interval;
        if (task.isRunning) {
            interval = setInterval(() => {
                onUpdateTask(task.id, {time: task.time + 1});
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [task.isRunning, task.time, onUpdateTask, task.id]);

    return (
        <div>
            <h3>{task.title}</h3>
            <p> Time: {task.time}</p>
            <p>Status: {task.isCompleted ? 'Completed' : task.isRunning ? 'Running' : 'Stopped'}</p>
            <button onClick = {() => onUpdateTask(
                task.id, {isRunning: !task.isRunning})}> 
                {task.isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick = {() => onDeleteTask(task.id)}>Delete</button>
            <button onClick = {() => onCompleteTask(task.id)}>Complete</button>
        
        </div>

    );
}