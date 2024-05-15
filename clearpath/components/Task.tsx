// components/Task.tsx
import React from 'react';
import styles from './Task.module.css';  // Assuming you'll add some styles

//This is a description of ClearPath task convention
export interface Task {
    id: number;
    title: string;
    description: string;
    date_start: string;
    date_end: string;
}
interface TaskProps {
    task: Task;
}
//This a component of Task element
const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <div className={styles.task}>
            <h3 className={styles.title}>{task.title}</h3>
            <p className={styles.description}>{task.description}</p>
            <p className={styles.dates}>
                <span>Start: {new Date(task.date_start).toLocaleDateString()}</span>
                <span>End: {new Date(task.date_end).toLocaleDateString()}</span>
            </p>
        </div>
    );
};

export default Task;

