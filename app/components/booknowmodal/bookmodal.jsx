'use client'
import React from 'react'

const BookNowModal = () => {
  return (
    <div>
      <label htmlFor="booknow-modal" className="modal-overlay"></label>
      <div className="modal">
        <div className="modal-content book-modal">
          <h2>Book Your Stay</h2>
          <form className="book-form">
            <label htmlFor="checkin">Check-in Date:</label><br/>
            <input className="book-input" type="date" id="checkin" name="checkin" required /><br/>

            <label htmlFor="checkout">Check-out Date:</label><br/>
            <input className="book-input" type="date" id="checkout" name="checkout" required /><br/>

            <label htmlFor="guests">Number of Guests:</label><br/>
            <input className="book-input" type="number" id="guests" name="guests" min="1" max="10" required /><br/>

            <label htmlFor="nights">Number of Nights:</label><br/>
            <input className="book-input" type="number" id="nights" name="nights" min="1" max="30" required /><br/>

            <label htmlFor="rooms">Number of Rooms:</label><br/>
            <input className="book-input" type="number" id="rooms" name="rooms" min="1" max="10" required /><br/>

            <div className="book-actions">
              <button type="submit" className="book-submit">Confirm Booking</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookNowModal
