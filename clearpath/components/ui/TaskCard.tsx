import React from 'react';

interface TaskCardProps {
  date: string;
  time: string;
  description: string;
  initials: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ date, time, description, initials }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
         {/* Calendar icon */}
         <svg
            className="w-5 h-5 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-gray-700">{date}</span>
        </div>
        <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-300">
          {initials}
        </div>
      </div>
      <div className="flex justify-start items-center mb-2">
        {/* Clock icon */}
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-green-500">{time}</span>
      </div>
      <h3 className="text-gray-700 font-semibold">{description}</h3>
    </div>
  );
}

export default TaskCard;