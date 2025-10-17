import React from 'react'

const TaskRender = ({ userData}) => {
  const {tasks} = userData;

  const newTasks = tasks.filter(t => t.newTask).length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const acceptedTasks = tasks.filter(task => task.active && !task.newTask && !task.completed && !task.failed).length;
  const failedTasks = tasks.filter(t => t.failed).length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-9">
  
  <div className="bg-white  rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 ">
    <h3 className="text-3xl font-semibold mb-2">{newTasks}</h3>
    <p className="text-gray-600">New Task</p>
  </div>

  
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
    <h3 className="text-3xl font-semibold mb-2">{completedTasks}</h3>
    <p className="text-gray-600">Completed</p>
  </div>

  
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
    <h3 className="text-3xl font-semibold mb-2">{acceptedTasks}</h3>
    <p className="text-gray-600">Accepted</p>
  </div>

  
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
    <h3 className="text-3xl font-semibold mb-2">{failedTasks}</h3>
    <p className="text-gray-600">Failed</p>
  </div>
</div>

  )
}

export default TaskRender