const express = require('express')
const {
	getTickets,
	getTicket,
	createTicket,
} = require('../controllers/ticketController')
const router = express.Router()

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).post(protect, createTicket)

module.exports = router
