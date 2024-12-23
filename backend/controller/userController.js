module.exports =


{
    getAllBookings: (db) => (_req, res) => {
      const query = 'SELECT * FROM bookings';
      db.query(query, (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Error retrieving bookings' });
        }
        res.json(results);
      });
    },
    
    createBooking: (db) => (req, res) => {
      // Extract values from request body
      const { movieName, time, seats, namess, ph, email, payment } = req.body;
    
      // Validate required fields
      if (!movieName || !time || !seats || !namess || !ph || !email || !payment) {
        return res.status(400).json({ message: 'All fields are required' });
      }
    
      const query = 'INSERT INTO bookings (movieName, time, seats, namess, ph, email, payment) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(query, [movieName, time, seats, namess, ph, email, payment], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating booking' });
        }
    
        // Return success response with inserted booking ID
        res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
        console.log('Received data:', req.body); 
      });
    },
    
    updateBooking: (db) => (req, res) => {
        // Extract the booking ID from URL parameters
        const { id } = req.params;
        
        // Extract other values from the request body
        const { movieName, time, seats, namess, ph, email, payment } = req.body;
      
        // Validate required fields
        if (!movieName || !time || !seats || !namess || !ph || !email || !payment) {
          return res.status(400).json({ message: 'All fields are required' });
        }
      
        // SQL query to update the booking in the database
        const query = 'UPDATE bookings SET movieName = ?, time = ?, seats = ?, namess = ?, ph = ?, email = ?, payment = ? WHERE id = ?';
        
        // Execute the query to update the booking in the database
        db.query(query, [movieName, time, seats, namess, ph, email, payment, id], (err, result) => {
          if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Error updating booking' });
          }
      
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Booking not found' });
          }
      
          
          res.json({ message: 'Booking updated successfully' });
        });
      },
      
    deleteBooking: (db) => (req, res) => {
      const { id } = req.params;
      const query = 'DELETE FROM bookings WHERE id = ?';
      db.query(query, [id], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error deleting booking' });
        }
        res.json({ message: 'Booking deleted successfully' });
      });
    },
  };