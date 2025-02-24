import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        onAddTask( {title} );
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                placeholder = "Enter new task"
            />
            <button type = "submit">Add Task</button>
        </form>
    );
}

export default TaskForm;
    