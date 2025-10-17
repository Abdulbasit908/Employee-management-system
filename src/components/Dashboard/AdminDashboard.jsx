import Header from '../employeeSmallComp/Header'
import CreateTask from '../employeeSmallComp/CreateTask'
import AllTask from '../employeeSmallComp/AllTask'
const AdminDashboard = ({handleLogout, userData}) => {

  
  
  return (
    <div className=' bg-[#1C1C1C] p-8 rounded-sm '>
      <Header  handleLogout={handleLogout} userData={userData}/>
      {/* input section */}
      <CreateTask />
      {/* Task render section */}
      <AllTask/>
    </div>
  )
}

export default AdminDashboard