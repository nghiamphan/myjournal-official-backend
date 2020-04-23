const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const User = require('../models/user')

const api = supertest(app)

let firstUserLoginResponse
let secondUserLoginResponse

beforeEach(async () => {
	await helper.setupInitialDatabase()
	firstUserLoginResponse = await api.post('/api/login').send({
		username: (await helper.firstUser()).username,
		password: (await helper.firstUser()).password
	})
})

describe('when there are initially some journals saved', () => {
	describe('if the authorization token is valid (user 1 logged in)', () => {
		test('journals are returned as json with statuscode 200', async () => {
			await api
				.get('/api/journals')
				.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
				.expect(200)
				.expect('Content-Type', /application\/json/)
		})

		test('all journals are returned', async () => {
			const response = await api.get('/api/journals')
				.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })

			expect(response.body).toHaveLength(helper.initialJournals.length)
		})

		test('a specific journal is within the returned journals', async () => {
			const response = await api.get('/api/journals')
				.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })

			const dates = response.body.map(r => r.date)
			expect(dates).toContain('2020-03-23')

			const reflections = response.body.map(r => r.reflection)
			expect(reflections).toContain('Today is good.')
		})

		describe('viewing a specific journal', () => {
			test('succeeds with statuscode 200 if id is valid', async () => {
				const journalsAtStart = await helper.journalsInDb()

				let journalToView = journalsAtStart[0]

				const response = await api
					.get(`/api/journals/${journalToView.id}`)
					.expect(200)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect('Content-Type', /application\/json/)

				journalToView = { ...journalToView.toJSON(), user_id: journalToView.user_id.toString() }
				expect(response.body).toEqual(journalToView)
			})

			test('fails with statuscode 404 if journal does not exist', async () => {
				const users = await helper.usersInDb()
				const validNonexistingId = await helper.nonExistingId(users[0])

				await api
					.get(`/api/journals/${validNonexistingId}`)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect(404)
			})

			test('fails with statuscode 400 id is in invalid format', async () => {
				const invalidId = '5a3d5da59070081a82a3445'

				await api
					.get(`/api/journals/${invalidId}`)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect(400)
			})
		})

		describe('addition of a new journal', () => {
			test('succeeds with status 200 if data is valid', async () => {
				const newJournal = {
					date: '2020-01-01',
					todos: [],
					reflection: 'add a new journal test',
					book_summaries: [],
					words_of_today: []
				}

				await api
					.post('/api/journals')
					.send(newJournal)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect(200)
					.expect('Content-Type', /application\/json/)

				const journalsAtEnd = await helper.journalsInDb()
				expect(journalsAtEnd).toHaveLength(helper.initialJournals.length + 1)

				const dates = journalsAtEnd.map(r => r.date)
				expect(dates).toContain('2020-01-01')

				const reflections = journalsAtEnd.map(r => r.reflection)
				expect(reflections).toContain('add a new journal test')
			})

			test('fails with status code 400 if data is invalid', async () => {
				const newJournal = {
					date: '2020-01-01',
					todos: [],
					book_summaries: [],
					words_of_today: []
				}

				await api
					.post('/api/journals')
					.send(newJournal)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect(400)

				const journalsAtEnd = await helper.journalsInDb()
				expect(journalsAtEnd).toHaveLength(helper.initialJournals.length)
			})
		})

		describe('update a journal', () => {
			test('succeeds with status code 200 if data is valid', async () => {
				const journalsAtStart = await helper.journalsInDb()

				const updatedJournal = {
					...journalsAtStart[0].toJSON(),
					date: '2021-01-01',
					reflection: 'update a new journal test',
				}

				await api
					.put(`/api/journals/${updatedJournal.id}`)
					.send(updatedJournal)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect(200)
					.expect('Content-Type', /application\/json/)

				const journalsAtEnd = await helper.journalsInDb()
				expect(journalsAtEnd).toHaveLength(helper.initialJournals.length)

				const dates = journalsAtEnd.map(r => r.date)
				expect(dates).toContain('2021-01-01')

				const reflections = journalsAtEnd.map(r => r.reflection)
				expect(reflections).toContain('update a new journal test')
			})

			test('fails with status code 400 if data is invalid', async () => {
				const journalsAtStart = await helper.journalsInDb()

				const updatedJournal = {
					...journalsAtStart[0].toJSON(),
					date: '',
					reflection: 'update a new journal test',
				}

				await api
					.put(`/api/journals/${updatedJournal.id}`)
					.send(updatedJournal)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect(400)

				const journalsAtEnd = await helper.journalsInDb()
				expect(journalsAtEnd).toHaveLength(helper.initialJournals.length)

				const reflections = journalsAtEnd.map(r => r.reflection)
				expect(reflections).not.toContain('update a new journal test')
			})
		})

		describe('deletion of a journal', () => {
			test('succeeds with status code 204 if id is valid', async () => {
				const journalsAtStart = await helper.journalsInDb()
				const journalToDelete = journalsAtStart[0]

				await api
					.delete(`/api/journals/${journalToDelete.id}`)
					.set({ Authorization: 'bearer ' + firstUserLoginResponse.body.token })
					.expect(204)

				const journalAtEnd = await helper.journalsInDb()
				expect(journalAtEnd).toHaveLength(helper.initialJournals.length - 1)

				const dates = journalAtEnd.map(r => r.date)
				expect(dates).not.toContain('2020-03-23')

				const reflections = journalAtEnd.map(r => r.reflection)
				expect(reflections).not.toContain('Today is good.')
			})
		})
	})

	describe('if the authorization token is missing', () => {
		describe('addition of a new journal', () => {
			test('fails with status code 401', async () => {
				const newJournal = {
					date: '2020-01-01',
					todos: [],
					reflection: 'add a new journal test',
					book_summaries: [],
					words_of_today: []
				}

				await api
					.post('/api/journals')
					.send(newJournal)
					.expect(401)

				const journalsAtEnd = await helper.journalsInDb()
				expect(journalsAtEnd).toHaveLength(helper.initialJournals.length)
			})
		})

		describe('update a journal', () => {
			test('fails with status code 401', async () => {
				const journalsAtStart = await helper.journalsInDb()

				const updatedJournal = {
					...journalsAtStart[0].toJSON(),
					date: '2021-01-01',
					reflection: 'update a new journal test',
				}

				await api
					.put(`/api/journals/${updatedJournal.id}`)
					.send(updatedJournal)
					.expect(401)

				const journalsAtEnd = await helper.journalsInDb()
				expect(journalsAtEnd).toHaveLength(helper.initialJournals.length)

				const dates = journalsAtEnd.map(r => r.date)
				expect(dates).not.toContain('2021-01-01')

				const reflections = journalsAtEnd.map(r => r.reflection)
				expect(reflections).not.toContain('update a new journal test')
			})
		})

		describe('deletion of a journal', () => {
			test('fails with status code 401', async () => {
				const journalsAtStart = await helper.journalsInDb()
				const journalToDelete = journalsAtStart[0]

				await api
					.delete(`/api/journals/${journalToDelete.id}`)
					.expect(401)

				const journalAtEnd = await helper.journalsInDb()
				expect(journalAtEnd).toHaveLength(helper.initialJournals.length)

				const dates = journalAtEnd.map(r => r.date)
				expect(dates).toContain('2020-03-23')

				const reflections = journalAtEnd.map(r => r.reflection)
				expect(reflections).toContain('Today is good.')
			})
		})
	})

	describe('if the authorization token is incompatible (user 2 logged in)', () => {
		beforeEach(async () => {
			// Login with a user who did not create the journal
			const secondUser = new User(await helper.secondUser())
			await secondUser.save()

			secondUserLoginResponse = await api.post('/api/login').send({
				username: secondUser.username,
				password: (await helper.secondUser()).password
			})
		})

		describe('update a journal', () => {
			test('fails with status code 401 if a journal is updated by a user who did not create it', async () => {
				const journalsAtStart = await helper.journalsInDb()

				const updatedJournal = {
					...journalsAtStart[0].toJSON(),
					date: '2021-01-01',
					reflection: 'update a new journal test',
				}

				const journalResponse = await api
					.put(`/api/journals/${updatedJournal.id}`)
					.send(updatedJournal)
					.set({ Authorization: 'bearer ' + secondUserLoginResponse.body.token })
					.expect(401)

				expect(journalResponse.text).toEqual('{"error":"cannot update a journal created by other user"}')

				const journalsAtEnd = await helper.journalsInDb()
				expect(journalsAtEnd).toHaveLength(helper.initialJournals.length)

				const dates = journalsAtEnd.map(r => r.date)
				expect(dates).not.toContain('2021-01-01')

				const reflections = journalsAtEnd.map(r => r.reflection)
				expect(reflections).not.toContain('update a new journal test')
			})
		})

		describe('deletion of a journal', () => {
			test('fails with status code 401 if if a journal is deleted by a user who did not create it', async () => {
				const journalsAtStart = await helper.journalsInDb()
				const journalToDelete = journalsAtStart[0]

				const journalResponse = await api
					.delete(`/api/journals/${journalToDelete.id}`)
					.set({ Authorization: 'bearer ' + secondUserLoginResponse.body.token })
					.expect(401)

				expect(journalResponse.text).toEqual('{"error":"cannot delete a journal created by other user"}')

				const journalAtEnd = await helper.journalsInDb()
				expect(journalAtEnd).toHaveLength(helper.initialJournals.length)

				const dates = journalAtEnd.map(r => r.date)
				expect(dates).toContain('2020-03-23')

				const reflections = journalAtEnd.map(r => r.reflection)
				expect(reflections).toContain('Today is good.')
			})
		})
	})
})

afterAll(() => {
	mongoose.connection.close()
})