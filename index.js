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

let initialJournals = [
	{
		id: 1,
		date: '2020-03-23',
		todos: [
			{
				id: 1,
				task: 'Learn React for two hours',
				done: true
			},
			{
				id: 2,
				task: 'Learn to skate for one hour',
				done: false
			}
		],
		reflection: 'Today is good.',
		book_summaries: [
			{
				id: 1,
				title: 'Catch-22',
				chapter: 'The Texan',
				summary: 'This chapter is very interesting'
			}
		],
		words_of_today: [
			{
				id: 1,
				word: 'Epiphany',
				definition: 'A suddent moment of insight or realization.'
			}
		]
	},
	{
		id: 2,
		date: '2020-03-24',
		todos: [
			{
				id: 1,
				task: 'Mediatation for 5 minutes',
				done: true
			}
		],
		reflection: 'Today is fantastic.',
		book_summaries: [
			{
				id: 1,
				title: 'Selfish Gene',
				chapter: '12',
				summary: 'This chapter is very insightful.'
			}
		],
		words_of_today: []
	}
]

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

app.post('/api/journals', async (request, response) => {
	const body = request.body

	if (!body.date || !body.reflection) {
		return response.status(400).json({
			error: 'content missing'
		})
	}

	const journal = new Journal({
		date: body.date,
		todos: body.todos,
		reflection: body.reflection,
		book_summaries: body.book_summaries,
		words_of_today: body.words_of_today
	})

	const savedJournal = await journal.save()
	response.json(savedJournal)
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
	}
	next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})