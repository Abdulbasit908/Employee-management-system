import React, { useContext } from 'react'
import Login from './components/Authui/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Header from './components/employeeSmallComp/Header'
import { useEffect, useState  } from 'react'
import { authContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("")
  const   authData  = useContext(authContext)
  
  useEffect(()=>{
    const loggedIn = localStorage.getItem("loggedIn")
    if (loggedIn) {
      const userData = JSON.parse(loggedIn)
      setUser(userData.role)
      setEmail(userData.email)
    }
  },[authData])
  
  

  const handleLogin = (email, pass) => {
    if (authData && authData.emp.find( e => e.email === email && e.password === pass)) {
      setUser("Employee")
      setEmail(email)
      localStorage.setItem("loggedIn", JSON.stringify({role: "Employee", email}))
    } else if (authData && authData.adm.find( e => e.email === email && e.password === pass)) {
      setUser("Admin")
      setEmail(email)
      localStorage.setItem("loggedIn", JSON.stringify({role: "Admin", email}))
    } else {
      alert('Invalid credentials')
    }
  }

  const handleLogout = () => {
  localStorage.removeItem("loggedIn");
  setUser(null);
  setEmail("");
  };

  const currentUser =
  user === "Employee"
    ? authData?.emp.find(e => e.email === email)
    : authData?.adm.find(a => a.email === email);

  
  
  return (
    <div>
        
        {
          !user ? (
            <Login handleLogin={handleLogin}/>
          ) : user === "Admin" ? (
            <AdminDashboard  handleLogout={handleLogout} userName={email}  userData={currentUser}/>
          ) : user === "Employee" ? (
            <EmployeeDashboard  handleLogout={handleLogout} userName={email}  userData={currentUser}/>
          ) : null
        }
    </div>
  )
}

export default App