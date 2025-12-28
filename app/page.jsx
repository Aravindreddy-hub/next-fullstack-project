import React from 'react'
import Link from 'next/link'
import AdminNavbar from './components/navbar/navbar'

export default function HomePage() {
  return (
    <div className="landing-bg">
      <AdminNavbar />

      <main className="hero" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Welcome to the Holiday Resort</h1>
        <p>Relax, unwind and enjoy our beautiful beachfront resort — curated experiences for every traveler.</p>

        <div className="heroGallery" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
          <a href="https://unsplash.com/s/photos/resort" target="_blank" rel="noopener noreferrer">
            <img src="/image1.jpg" alt="resort 1" style={{ width: 280, height: 200, objectFit: 'cover', borderRadius: 8 }} />
          </a>
          <a href="https://unsplash.com/s/photos/resort" target="_blank" rel="noopener noreferrer">
            <img src="/image2.jpg" alt="resort 2" style={{ width: 280, height: 200, objectFit: 'cover', borderRadius: 8 }} />
          </a>
          <a href="https://unsplash.com/s/photos/resort" target="_blank" rel="noopener noreferrer">
            <img src="/image3.jpg" alt="resort 3" style={{ width: 280, height: 200, objectFit: 'cover', borderRadius: 8 }} />
          </a>
        </div>
      </main>

      <div style={{ textAlign: 'center', margin: 24 }}>
        <Link href="/booking">
          <button className="bookNowButton" style={{ padding: '12px 20px', fontSize: 16, cursor: 'pointer' }}>Book Now</button>
        </Link>
      </div>

      <footer style={{ textAlign: 'center', padding: 20 }}>
        <p>&copy; 2023 Holiday Resort. All rights reserved. Aravind Reddy</p>
      </footer>
    </div>
  )
}
