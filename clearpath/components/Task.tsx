// components/Task.tsx
import React from 'react';
import styles from './Task.module.css';  // Assuming you'll add some styles
import TaskCard from '@/components/ui/TaskCard';

//This is a description of ClearPath task convention
export interface Task {
    id: number;
    initials: string;
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
        <>
            <TaskCard date={task.date_end} time={task.date_start} initials={task.initials} description={task.description}/>
        </>
    );
};

export default Task;

