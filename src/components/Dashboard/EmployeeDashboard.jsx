import React from 'react'
import Header from '../employeeSmallComp/Header'
import TaskRender from '../employeeSmallComp/TaskRender'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({handleLogout, userData, userName}) => {
  
  
  return (
    <div className=' bg-[#1C1C1C] p-8 min-h-screen'>
      <Header handleLogout={handleLogout} userName={userName} userData={userData}/>
      <TaskRender userData={userData}/>
      <TaskList userData={userData}/>
    </div>
  )
}

export default EmployeeDashboard