const express = require('express')
const app = express()

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
		book_summary: [
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
		book_summary: [
			{
				id: 1,
				title: 'Selfish Gene',
				chapter: '12',
				summary: 'This chapter is very insightful.'
			}
		]
	}
]

app.get('/api/journals', (request, response) => {
	response.json(initialJournals)
})

app.get('/api/journals/:id', (request, response) => {
	const id = Number(request.params.id)
	const journal = initialJournals.find(journal => journal.id === id)

	if (journal) {
		response.json(journal)
	} else {
		response.status(404).end()
	}
})

app.delete('/api/journals/:id', (request, response) => {
	const id = Number(request.params.id)
	initialJournals = initialJournals.filter(journal => journal.id !== id)
	response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})