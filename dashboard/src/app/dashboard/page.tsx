import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-6xl mx-auto bg-slate-800 rounded-2xl shadow-gray-800 shadow-lg p-8 space-y-8'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-extrabold text-gray-300 mb-4 sm:mb-0 '>Dashboard</h1>
          <p className='text-md text-gray-400 mt-3'>
            Welcome back! Here you can manage your tasks, view analytics, and make adjestments.
          </p>
        </div>
        {/* Dashboard content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* task card */}
          <Link className='p-6 rounded-xl shadow-md hover:shadow-xl bg-slate-700 flex flex-col justify-between hover:scale-102' href={"/dashboard/tasks"}>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-blue-400 '>Tasks</h2>
              <span className='text-blue-300 text-2xl'>📃</span>
            </div>
            <p className='text-gray-300 mt-2'>View, orgnize and manange your daily tasks.</p>
          </Link>
        {/* analytics card */}
          <Link className='p-6 rounded-xl shadow-md hover:shadow-xl bg-emerald-900 flex flex-col  hover:scale-102' href={"/dashboard/analytics"}>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-green-500 '>Analytics</h2>
              <span className='text-blue-300 text-2xl'>📊</span>
            </div>
            <p className='text-gray-300 mt-2'>Track and analyze your task progress.</p>
          </Link>
        {/* settings card */}
          <Link className='p-6 rounded-xl shadow-md hover:shadow-xl bg-purple-900 flex flex-col  hover:scale-102' href={"/dashboard/setting"}>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-purple-300 '>Settings</h2>
              <span className='text-blue-300 text-2xl'>⚙</span>
            </div>
            <p className='text-gray-300 mt-2'>Manage your account settings.</p>
          </Link>
        {/* Users card */}
          <Link className='p-6 rounded-xl shadow-md hover:shadow-xl bg-violet-900 flex flex-col  hover:scale-102' href={"/dashboard/users"}>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-violet-300 '>Users</h2>
              <span className='text-blue-300 text-2xl'>👥</span>
            </div>
            <p className='text-gray-300 mt-2'>Manage your users.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
