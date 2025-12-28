"use client"

import React, { useState } from 'react'
import { registerAction } from '../ServerAction/registerAction'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

const router = useRouter()


  const registerHandler = async(e)=>{
        e.preventDefault();
        const registerDetails = {username, email, password}
        console.log("this is register detials", registerDetails)
        try {
          await registerAction(registerDetails)
          router.push("/login")
          alert("User Registered successfully")
        } catch (error) {
              setError(error.message)
        }
      
  }

  return (
    <div className="register-bg">
      <div className="register-card">
        <h1>Register Form</h1>
        <form onSubmit={registerHandler} className="login-form">
          {error && <p style={{color:'red'}}>{error}</p>}
          <input className="login-input" type="text" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
          <input className="login-input" type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <input className="login-input" type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          <button type='submit' className="login-button">Register</button>
          <div className="login-links"><Link href="/login">Already Registered? Login</Link></div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage;