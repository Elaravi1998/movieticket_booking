import React, { useState } from "react";
import axios from "axios"; 

const Login = () => {
  const [formData, setFormData] = useState({
    movieName: "",
    time: "",
    seats: "",
    namess: "",
    ph: "",
    email: "",
    payment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Make POST request to your backend
      const response = await axios.post("http://localhost:5000/api/bookings/add", formData);
     

      // Handle success response
      alert("Ticket Booking Successful!");
      alert("Enjoy Watching Movie!!!");
      console.log("Response from server:", response.data);

      // Reset form
      setFormData({
        movieName: "",
        time: "",
        seats: "",
        namess: "",
        ph: "",
        email: "",
        payment: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error); 
     

      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container1">
      <h3 className="header1">HELLO EVERYONE...!!! WELCOME TO VTS SHOW</h3>
      <br></br>
      <h5>VTS Show is an exciting and innovative platform dedicated to bringing the best of entertainment to your screens. From the latest blockbuster movies to live events, thrilling plays, and exciting sports matches, VTS Show offers a wide variety of entertainment options that cater to all types of viewers. Whether you're a movie enthusiast, a theater lover, or a sports fanatic, VTS Show ensures an unforgettable experience with top-quality content, cutting-edge technology, and seamless accessibility.</h5>
      <div className="form-container1">
        <h2 className="form-title1"><i>VTS SHOW BOOKING FORM</i></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field1">
            <label>Movie Interested:</label>
            <input
              type="text"
              name="movieName"
              placeholder="Enter Interested Movie"
              value={formData.movieName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field1">
            <label>Timings:</label>
            <input
              type="text"
              name="time"
              placeholder="Enter Your Timing"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field1">
            <label>Seat Required:</label>
            <input
              type="text"
              name="seats"
              placeholder="Enter Your Preferred Seating"
              value={formData.seats}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field1">
            <label>Your Name:</label>
            <input
              type="text"
              name="namess"
              placeholder="Enter Your Name"
              value={formData.namess}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field1">
            <label>Phone Number:</label>
            <input
              type="text"
              name="ph"
              placeholder="Enter Your Phone Number"
              value={formData.ph}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field1">
            <label>Mail ID:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Mail ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field1">
            <label>Payment:</label>
            <input
              type="number"
              name="payment"
              placeholder="Enter Payment Amount"
              value={formData.payment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit1" className="submit-btn1" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <p className="thank-you1">THANKS FOR BOOKING US!</p>
      </div>
    </div>
  );
};

export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';


// const TicketBookingForm = () => {
//   const [movieName, setMovieName] = useState('');
//   const [time, setTime] = useState('');
//   const [seat, setSeat] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const ticketData = { movieName, time, seat, name, phone, email, paymentMethod };

//     try {
//       await axios.post('http://localhost:5000/api/tickets/book', ticketData);
//       alert('Ticket booked successfully');
//     } catch (error) {
//       console.error('Error booking ticket:', error);
//       alert('Error booking ticket');
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Movie Ticket Booking</h2>
//       <input
//         type="text"
//         placeholder="Movie Name"
//         value={movieName}
//         onChange={(e) => setMovieName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Seat"
//         value={seat}
//         onChange={(e) => setSeat(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <select
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//       >
//         <option value="Credit Card">Credit Card</option>
//         <option value="Debit Card">Debit Card</option>
//         <option value="UPI">UPI</option>
//       </select>
//       <button type="submit">Book Ticket</button>
//     </form>
//   );
// };

// export default TicketBookingForm;