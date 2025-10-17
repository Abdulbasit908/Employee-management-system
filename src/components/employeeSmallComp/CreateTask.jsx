import React, { useState, useContext } from 'react'
import { authContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const [newTasks, setNewTasks] = useState({})

  const { addTask } = useContext(authContext) || {}

  const submitHandler = (e) => {
    e.preventDefault()
    // build task locally so we don't rely on async state update
    const taskObj = { title, date, category, description, active: false, newTask: true, completed: false, failed: false }

    // prefer using context addTask if available so UI updates immediately
    if (typeof addTask === 'function') {
      const res = addTask(assignTo, taskObj)
      if (!res.ok) {
        if (res.reason === 'no-match') alert("No matching employee found for the 'Assign to' name.")
        else alert('Unable to add task. Please try again.')
        return
      }
      setNewTasks(taskObj)
      console.log('saved task via context ->', taskObj)
      alert('Task Created Successfully')
      setAssignTo('')
      setCategory('')
      setDate('')
      setDescription('')
      setTitle('')
      return
    }

    // fallback to direct localStorage write if context not available
    const data = JSON.parse(localStorage.getItem("employees"))
    const employees = Array.isArray(data) ? data : []
    if (employees.length === 0) {
      alert('No employees found to assign the task to.')
      return
    }
    let assigned = false
    const updated = employees.map((elem) => {
      if (elem.firstName === assignTo) {
        elem.tasks = Array.isArray(elem.tasks) ? elem.tasks : []
        elem.tasks.push(taskObj)
        elem.taskCount = elem.taskCount || { newTask: 0, completed: 0, failed: 0 }
        elem.taskCount.newTask = (elem.taskCount.newTask || 0) + 1
        assigned = true
      }
      return elem
    })

    if (!assigned) {
      alert("No matching employee found for the 'Assign to' name.")
      return
    }

    localStorage.setItem("employees", JSON.stringify(updated))
    setNewTasks(taskObj)
    console.log('saved task ->', taskObj)
    alert('Task Created Successfully')
    setAssignTo('')
    setCategory('')
    setDate('')
    setDescription('')
    setTitle('')
  }
  return (
    <div>
      <form className='bg-[#1e1e1e] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-4 mt-10  w-full h-auto'
      onSubmit={submitHandler}
      >
        <div className=" p-6 rounded-xl w-full  space-y-5">


          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">Task Title</label>
            <input
              value={title}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-[#2c2c2c] text-gray-200 placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 "
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>


          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">Date</label>
            <div className="relative">
              <div className="relative w-full">
                <input
                  value={date}
                  type="date"
                  className="bg-[#2c2c2c] text-gray-200 px-4 py-2 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(e)=> setDate(e.target.value)}
                />
              </div>
            </div>
          </div>


          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">Assign to</label>
            <input
              value={assignTo}
              type="text"
              placeholder="employee name"
              className="bg-[#2c2c2c] text-gray-200 placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e)=> setAssignTo(e.target.value)}
            />
          </div>


          <div className="flex flex-col">
            <label className="text-gray-300 mb-2">Category</label>
            <input
              value={category}
              type="text"
              placeholder="design, dev, etc"
              className="bg-[#2c2c2c] text-gray-200 placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e)=> setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* second part of input */}

        <div className="flex flex-col mt-6">
          <label className="text-gray-300 mb-2">Description</label>
          <textarea
          value={description}
            placeholder="Write task details here..."
            className="bg-[#2c2c2c] text-gray-200 placeholder-gray-500 px-4 py-3 rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-42"
           onChange={(e)=> setDescription(e.target.value)}
          ></textarea>
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-md font-semibold px-6 py-2 rounded-lg mt-4"
          >
            Create Task
          </button>
        </div>


      </form>
    </div>
  )
}

export default CreateTask