import React from 'react';
import './style.css';

const TasksContainer = ({children}) => (
    <div className="tasks__container">
        {children}
    </div>
);

export default TasksContainer;