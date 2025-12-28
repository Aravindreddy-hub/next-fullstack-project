"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { loginAction } from '../../ServerAction/loginAction'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const loginDetails = { email, password }
    try {
      const res = await loginAction(loginDetails)
      console.log('login result', res)
      alert('Login successful')
      router.push('/')
    } catch (error) {
      alert('Login failed: ' + error.message)
    }
  }

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1>Login Form</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit" className="login-button">Login</button>
          <div className="login-links"><Link href="/forgot">forgot password?</Link></div>
        </form>
        <div className="login-register"><Link href="/register">New User? Register here</Link></div>
      </div>
    </div>
  )
}

export default Login
