'use client'


import Link from 'next/link'
import { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('')
    if (newPassword && newPassword !== confirmPassword) {
      setMessage('Passwords do not match')
      return
    }
    setMessage('Form submitted (client-side only).')
  }

  return (
    <div className="formContainer">
      <h1>Forgot / Reset Password</h1>
      <form onSubmit={handleSubmit} className="formSection">
        {message && <p style={{ color: 'blue' }}>{message}</p>}

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          New password
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </label>

        <label>
          Confirm password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <p>
        Back to <Link href="/login">Login</Link>
      </p>
    </div>
  )
}

export default ForgotPassword
