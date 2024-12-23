const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

module.exports = (db) => {
  router.get('/bookings/get', userController.getAllBookings(db));
  router.post('/bookings/add', userController.createBooking(db));
  router.put('/bookings/update/:id', userController.updateBooking(db));
  router.delete('/bookings/delete/:id', userController.deleteBooking(db));

  return router;
};





// const express = require('express');
// const router = express.Router();
// const ticketController = require('../controller/userController');


// // POST: Book ticket
// router.post('/book', ticketController.bookTicket);

// // GET: Get all tickets
// router.get('/', ticketController.getTickets);

// // DELETE: Delete ticket
// router.delete('/delete/:id', ticketController.deleteTicket);

// module.exports = router;