import React from 'react';
import Task from './Task';

function TaskList({ tasks, onUpdateTask, onDeleteTask, onCompleteTask }) {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task = {task}
                    onUpdateTask = {onUpdateTask}
                    onDeleteTask = {onDeleteTask}
                    onCompleteTask = {onCompleteTask}
                />
            ))}
        </div>
    );
}

export default TaskList;