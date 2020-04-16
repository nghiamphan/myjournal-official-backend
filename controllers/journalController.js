const journalsRouter = require('express').Router()
const Journal = require('../models/journal')
const User = require('../models/user')

journalsRouter.get('/', async (request, response) => {
	const journals = await Journal.find({})
		.populate('user_id', { username: 1, name: 1 })
	response.json(journals)
})

journalsRouter.get('/:id', async (request, response) => {
	const journal = await Journal.findById(request.params.id)
	if (journal) {
		response.json(journal)
	} else {
		response.status(404).end()
	}
})

journalsRouter.post('/', async (request, response) => {
	const body = request.body

	const user = await User.findById(body.user_id)

	const journal = new Journal({
		date: body.date,
		todos: body.todos,
		reflection: body.reflection,
		book_summaries: body.book_summaries,
		words_of_today: body.words_of_today,
		user_id: user._id
	})

	const savedJournal = await journal.save()
	user.journals = user.journals.concat(savedJournal._id)
	await user.save()

	response.json(savedJournal)
})

journalsRouter.put('/:id', async (request, response) => {
	const body = request.body

	const journal = {
		date: body.date,
		todos: body.todos,
		reflection: body.reflection,
		book_summaries: body.book_summaries,
		words_of_today: body.words_of_today
	}

	const updatedJournal = await Journal.findByIdAndUpdate(request.params.id, journal, { new: true })
	response.json(updatedJournal)
})

journalsRouter.delete('/:id', async (request, response) => {
	await Journal.findByIdAndRemove(request.params.id)
	response.status(204).end()
})

module.exports = journalsRouter