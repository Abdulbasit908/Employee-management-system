import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocatlStorage } from '../utils/localStorage'

export const authContext = createContext()
const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])
  const [admins, setAdmins] = useState([])


  const refresh = () => {
    const { emp, adm } = getLocalStorage()
    setEmployees(emp || [])
    setAdmins(adm || [])
  }

  useEffect(() => {
    // initialize localStorage only if not present
    if (!localStorage.getItem('employees')) setLocatlStorage()
    refresh()
  }, [])

  const addTask = (assignToName, taskObj) => {
    if (!Array.isArray(employees) || employees.length === 0) return { ok: false, reason: 'no-employees' }
    let assigned = false
    const updated = employees.map((emp) => {
      if (emp.firstName === assignToName) {
        emp.tasks = Array.isArray(emp.tasks) ? emp.tasks : []
        emp.tasks.push(taskObj)
        emp.taskCount = emp.taskCount || { newTask: 0, completed: 0, failed: 0 }
        emp.taskCount.newTask = (emp.taskCount.newTask || 0) + 1
        assigned = true
      }
      return emp
    })

    if (!assigned) return { ok: false, reason: 'no-match' }

    setEmployees(updated)
    try {
      localStorage.setItem('employees', JSON.stringify(updated))
    } catch (err) {
      console.warn('failed to write employees to localStorage', err)
    }
    return { ok: true }
  }

  return (
    <authContext.Provider value={{ emp: employees, adm: admins, addTask, refresh }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
