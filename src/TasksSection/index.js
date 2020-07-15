import React from 'react';
import './style.css';

const TasksSection = ({children}) => (
    <div className="tasks">
        {children}
    </div>
);

export default TasksSection;