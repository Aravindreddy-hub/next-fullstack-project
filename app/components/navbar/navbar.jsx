"use client"

import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const AdminNavbar = () => {
  return (
    <nav className="navSection">
      <div className="nav-left">
        <h2 className="brand"><Link href="/">Holiday Resort</Link></h2>
        <p className="call-now">Call: 8234567856</p>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/booking">Booking</Link>
          <Link className="nav-link" href="/login">Login</Link>
          <Link className="nav-link" href="/register">Register</Link>
        </div>

        <button className="logout" onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
      </div>
    </nav>
  )
}

export default AdminNavbar