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
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m0 0a4 4 0 014 4h-4zm0 0H4a4 4 0 014-4zm8 14v-4a4 4 0 00-4-4H8m4 8a4 4 0 01-4-4m4 4v4m0-4H4a4 4 0 014-4m8 14a4 4 0 01-4-4m4 4h4a4 4 0 00-4-4m-4 0v-4m0 4h4a4 4 0 01-4 4zm8-18v4a4 4 0 01-4 4H4m8-8a4 4 0 004-4m4 0v4a4 4 0 01-4 4h-4" />
          </svg>
          <span className="text-gray-700">{date}</span>
        </div>
        <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-300">
          {initials}
        </div>
      </div>
      <div className="flex justify-start items-center mb-2">
        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16l4-4h11a2 2 0 002-2z" />
        </svg>
        <span className="text-green-500">{time}</span>
      </div>
      <h3 className="text-gray-700 font-semibold">{description}</h3>
    </div>
  );
}

export default TaskCard;