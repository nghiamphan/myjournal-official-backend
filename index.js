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

app.get('/api/journals/:id', async (request, response) => {
	const journal = await Journal.findById(request.params.id)

	if (journal) {
		response.json(journal)
	} else {
		response.status(404).end()
	}
})

const generateId = () => {
	const maxId = initialJournals.length > 0
		? Math.max(...initialJournals.map(n => n.id))
		: 0
	return maxId + 1
}

app.post('/api/journals', (request, response) => {
	const body = request.body

	if (!body.date || !body.reflection) {
		return response.status(400).json({
			error: 'content missing'
		})
	}

	const journal = {
		id: generateId(),
		date: body.date,
		todos: body.todos,
		reflection: body.reflection,
		book_summaries: body.book_summaries,
		words_of_today: body.words_of_today
	}

	initialJournals = initialJournals.concat(journal)

	response.json(journal)
})

app.delete('/api/journals/:id', (request, response) => {
	const id = Number(request.params.id)
	initialJournals = initialJournals.filter(journal => journal.id !== id)
	response.status(204).end()
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})