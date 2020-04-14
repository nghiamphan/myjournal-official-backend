require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Journal = require('./models/journal')
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method)
	console.log('Path:  ', request.path)
	console.log('Body:  ', request.body)
	console.log('---')
	next()
}

app.use(requestLogger)

app.get('/api/journals', async (request, response) => {
	const journals = await Journal.find({})
	response.json(journals)
})

app.get('/api/journals/:id', async (request, response, next) => {
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

app.post('/api/journals', async (request, response, next) => {
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

app.put('/api/journals/:id', async (request, response, next) => {
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

app.delete('/api/journals/:id', async (request, response, next) => {
	try {
		await Journal.findByIdAndRemove(request.params.id)
		response.status(204).end()
	} catch (error) {
		next(error)
	}
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if (error.name === 'CastError') {
		// For some reason, error.kind === undefined?
		return response.status(400).send({ error: 'malformatted id' })
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message })
	}
	next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})