import React from 'react'
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(authContext)
  console.log(authData.emp);
  return (
    <div  className='bg-[#1e1e1e] p-1 mt-8   h-full'>
      <h2 className='text-2xl font-semibold mb-4 text-white text-center'>Employee Data</h2>
      <div className='w-[99%] bg-[#a8a8a8] flex justify-between items-center p-3 m-3 rounded-sm'>
                <h2 className='font-semibold w-1/5'>Employee Name</h2>
                <h3 className='font-semibold w-1/5' >New Task</h3>
                <h5 className='font-semibold w-1/5'>Active Task</h5>
                <h5 className='font-semibold w-1/5'>Completed Task</h5>
                <h5 className='font-semibold w-1/5'>Failed Task</h5>
              </div>
      <div className='overflow-y-auto  h-[70%]' id='All-taskScroll'>
        {
          authData?.emp?.map((elem, i) => {
            return (
              <div className='w-full bg-[#a8a8a8] flex justify-between items-center p-3 m-5 rounded-sm ' key={i}>
                <h2 className='text-lg w-1/5'>{elem.firstName}</h2>
                <h3 className='text-orange-900 font-bold w-1/5' >{elem.taskCount.newTask}</h3>
                <h5 className='text-blue-900 font-bold w-1/5'>{elem.taskCount.newTask}</h5>
                <h5 className='text-green-800 font-bold w-1/5'>{elem.taskCount.completedTask}</h5>
                <h5 className='text-red-800 font-bold w-1/5'>{elem.taskCount.failedTask}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllTask