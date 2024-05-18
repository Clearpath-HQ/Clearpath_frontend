// pages/index.tsx
import React from 'react';
import Task from '../components/Task';
import { Task as TaskType } from '@/components/Task';

interface TasksProps {
    tasks: TaskType[];
}
const TaskList: React.FC <TasksProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
