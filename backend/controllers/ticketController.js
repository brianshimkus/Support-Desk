const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc: Get user tickets
// @route /api/tickets
// @access: Private
const getTickets = asyncHandler(async (req, res) => {
	// Get user
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	const tickets = await Ticket.find({ user: req.user.id })

	res.status(200).json(tickets)
})

// @desc: Get user ticket
// @route /api/tickets/:id
// @access: Private
const getTicket = asyncHandler(async (req, res) => {
	// Get user
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	const tickets = await Ticket.findById(req.params.id)

	if (!ticket) {
		res.status(404)
		throw new Error('Ticket not found')
	}

	// Limit access to just the logged in user
	if (ticket.user.toString() !== req.user.id) {
		res.status(401)
		throw new Error('Not authorized')
	}

	res.status(200).json(ticket)
})

// @desc: Create new ticket
// @route /api/tickets
// @access: Private
const createTicket = asyncHandler(async (req, res) => {
	const { product, description } = req.body

	if (!product || description) {
		res.status(400)
		throw new Error('Please enter a product and description')
	}

	// Get user
	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	const ticket = await Ticket.create({
		user: req.user.id,
		product,
		description,
		status: 'new',
	})

	res.status(201).json(ticket)
})

module.exports = { getTickets, getTicket, createTicket }
