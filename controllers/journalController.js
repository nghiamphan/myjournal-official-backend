const journalsRouter = require('express').Router()
const Journal = require('../models/journal')

journalsRouter.get('/', async (request, response) => {
	const journals = await Journal.find({})
	response.json(journals)
})

journalsRouter.get('/:id', async (request, response, next) => {
	try {
		const journal = await Journal.findById(request.params.id)
		if (journal) {
			response.json(journal)
		} else {
			response.status(404).end()
		}
	} catch (error) {
		next(error)
	}
})

journalsRouter.post('/', async (request, response, next) => {
	try {
		const body = request.body

		const journal = new Journal({
			date: body.date,
			todos: body.todos,
			reflection: body.reflection,
			book_summaries: body.book_summaries,
			words_of_today: body.words_of_today
		})

		const savedJournal = await journal.save()
		response.json(savedJournal)
	} catch (error) {
		next(error)
	}
})

journalsRouter.put('/:id', async (request, response, next) => {
	try {
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
	} catch (error) {
		next(error)
	}
})

journalsRouter.delete('/:id', async (request, response, next) => {
	try {
		await Journal.findByIdAndRemove(request.params.id)
		response.status(204).end()
	} catch (error) {
		next(error)
	}
})

module.exports = journalsRouter