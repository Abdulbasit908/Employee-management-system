import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-black to-gray-500 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8 space-y-6 text-white">
        <h2 className="text-3xl font-bold text-center">Welcome Back</h2>

        <form className="space-y-4" onSubmit={submitHandler}>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>


          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>


          <button
            type="submit"
            className="w-full py-2 bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>


        
      </div>
    </div>

  )
}

export default Login