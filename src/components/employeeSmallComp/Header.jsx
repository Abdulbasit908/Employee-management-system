import React from 'react'

const Header = ({ handleLogout, userData}) => {
  
  return (
    <div className='text-white flex justify-between items-center'>
      <h1 className='text-2xl font-semibold'>Hello 👋<br /> <span className='text-3xl font-bold'>{userData.firstName}</span></h1>
      <button className='bg-red-800 p-2 rounded-lg'
       onClick={handleLogout} 
      >Log out</button>
    </div>
  )
}

export default Header