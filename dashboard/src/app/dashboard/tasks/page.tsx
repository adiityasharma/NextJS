'use client';

import React, { useState } from 'react'

function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress",
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed",
      dueDate: "2025-02-15",
    },
  ];

  const [updatetask, setUpdateTask] = useState([...tasks]);

  const handleMarkAsCompleted = (id) => {
    const task = updatetask.filter((task) => task.id === id);
    // setUpdateTask(prev => [...prev, ])
    // console.log(task[0].status)

  }

  return (
    <div className='min-h-screen p-8 '>
      <div className='max-w-7xl mx-auto bg-gray-800 rounded-lg shadow-md p-8'>
        <h1 className='text-3xl font-bold text-gray-300 mb-4'>Tasks</h1>

        {/* tasklist section */}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {tasks.map((task) => (
            <div style={{borderColor: task.status === "Completed"? "green" : task.status === "In Progress" ? "blue" : "red"}} key={task.id} className='bg-gray-700 rounded-lg shadow-md p-4 border-l-4'>
              <h2 className='text-lg font-semibold text-gray-300 mb-2'>{task.title}</h2>
              <p className='text-gray-400'>{task.description}</p>
              <p className='text-gray-400 mt-2'>Status: {task.status}</p>
              <p className='text-gray-400 mt-2'>Due Date: {task.dueDate}</p>
              <button className='px-4 py-1 rounded bg-blue-500 mr-2 mt-3 cursor-pointer hover:bg-blue-700' >Edit</button>
              <button className='px-4 py-1 rounded bg-gray-600 mr-2 mt-3 cursor-pointer hover:bg-gray-800' >Delete</button>
              {
                task.status !== "Completed" && (
                  <button onClick={()=>handleMarkAsCompleted(task?.id)} className='px-4 py-1 rounded bg-gray-600 mr-2 mt-3 cursor-pointer hover:bg-green-700' >Mark As Completed</button>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
