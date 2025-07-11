import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-6xl mx-auto bg-slate-800 rounded-2xl shadow-gray-700 shadow-lg p-8 space-y-8'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-extrabold text-gray-300 mb-4 sm:mb-0 '>Dashboard</h1>
          <p className='text-md text-gray-400 mt-3'>
            Welcome back! Here you can manage your tasks, view analytics, and make adjestments.
          </p>
        </div>
        {/* Dashboard content */}
        <div>
        {/* task card */}
          <Link href={""}>
            <div>
              <h2>Tasks</h2>
              <span>📃</span>
            </div>
            <p>View, orgnize and manange your daily tasks.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
