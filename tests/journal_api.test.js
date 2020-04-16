const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Journal = require('../models/journal')
const User = require('../models/user')

const api = supertest(app)

beforeEach(async () => {
	// Set up initial user database
	await User.deleteMany({})

	const user = new User(await helper.initializeUser())

	const savedUser = await user.save()

	// Set up initial journal database
	await Journal.deleteMany({})

	const journalObjects = helper.initialJournals
		.map(journal => new Journal({ ...journal, user_id: savedUser._id }))
	const promiseArray = journalObjects.map(journal => journal.save())
	await Promise.all(promiseArray)
})

describe('when there is initially some journals saved', () => {
	test('journals are returned as json', async () => {
		await api
			.get('/api/journals')
			.expect(200)
			.expect('Content-Type', /application\/json/)
	})

	test('all journals are returned', async () => {
		const response = await api.get('/api/journals')

		expect(response.body).toHaveLength(helper.initialJournals.length)
	})

	test('a specific journal is within the returned journals', async () => {
		const response = await api.get('/api/journals')

		const dates = response.body.map(r => r.date)
		expect(dates).toContain('2020-03-23')

		const reflections = response.body.map(r => r.reflection)
		expect(reflections).toContain('Today is good.')
	})

	describe('viewing a specific journal', () => {
		test('succeeds with a valid id', async () => {
			const journalsAtStart = await helper.journalsInDb()

			let journalToView = journalsAtStart[0]

			const response = await api
				.get(`/api/journals/${journalToView.id}`)
				.expect(200)
				.expect('Content-Type', /application\/json/)

			journalToView = { ...journalToView.toJSON(), user_id: journalToView.user_id.toString() }
			expect(response.body).toEqual(journalToView)
		})

		test('fails with statuscode 404 if note does not exist', async () => {
			const users = await helper.usersInDb()
			const validNonexistingId = await helper.nonExistingId(users[0])

			await api
				.get(`/api/journals/${validNonexistingId}`)
				.expect(404)
		})

		test('fails with statuscode 400 id is invalid', async () => {
			const invalidId = '5a3d5da59070081a82a3445'

			await api
				.get(`/api/journals/${invalidId}`)
				.expect(400)
		})
	})

	describe('addition of a new note', () => {
		test('succeeds with valid data', async () => {
			const newJournal = {
				date: '2020-01-01',
				todos: [],
				reflection: 'add a new journal test',
				book_summaries: [],
				words_of_today: []
			}

			// Login to get token
			const response = await api.post('/api/login').send({
				username: (await helper.initializeUser()).username,
				password: (await helper.initializeUser()).password
			})

			await api
				.post('/api/journals')
				.send(newJournal)
				.set({ Authorization: 'bearer ' + response.body.token })
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

			// Login to get token
			const response = await api.post('/api/login').send({
				username: (await helper.initializeUser()).username,
				password: (await helper.initializeUser()).password
			})

			await api
				.post('/api/journals')
				.send(newJournal)
				.set({ Authorization: 'bearer ' + response.body.token })
				.expect(400)

			const journalsAtEnd = await helper.journalsInDb()
			expect(journalsAtEnd).toHaveLength(helper.initialJournals.length)
		})

		test('fails with status code 401 if token is invalid', async () => {
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

	describe('deletion of a note', () => {
		test('succeeds with status code 204 if id is valid', async () => {
			const journalsAtStart = await helper.journalsInDb()
			const journalToDelete = journalsAtStart[0]

			// Login to get token
			const response = await api.post('/api/login').send({
				username: (await helper.initializeUser()).username,
				password: (await helper.initializeUser()).password
			})

			await api
				.delete(`/api/journals/${journalToDelete.id}`)
				.set({ Authorization: 'bearer ' + response.body.token })
				.expect(204)

			const journalAtEnd = await helper.journalsInDb()
			expect(journalAtEnd).toHaveLength(helper.initialJournals.length - 1)

			const dates = journalAtEnd.map(r => r.date)
			expect(dates).not.toContain('2020-03-23')

			const reflections = journalAtEnd.map(r => r.reflection)
			expect(reflections).not.toContain('Today is good.')
		})

		test('fails with status code 401 if token is invalid', async () => {
			const journalsAtStart = await helper.journalsInDb()
			const journalToDelete = journalsAtStart[0]

			await api
				.delete(`/api/journals/${journalToDelete.id}`)
				.expect(401)
		})
	})
})

describe('when there is initially one user at db', () => {
	beforeEach(async () => {
		await User.deleteMany({})

		const passwordHash = await bcrypt.hash('root', 10)
		const user = new User({
			username: 'root',
			name: 'Root',
			passwordHash
		})

		await user.save()
	})

	test('creation succeeds with a fresh username', async () => {
		const usersAtStart = await helper.usersInDb()

		const newUser = {
			username: 'admin',
			name: 'Super User',
			password: 'password',
		}

		await api
			.post('/api/users')
			.send(newUser)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		const usersAtEnd = await helper.usersInDb()
		expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

		const usernames = usersAtEnd.map(u => u.username)
		expect(usernames).toContain(newUser.username)
	})

	test('creation fails with a duplicated username', async () => {
		const usersAtStart = await helper.usersInDb()

		const newUser = {
			username: 'root',
			name: 'Root',
			password: 'root',
		}

		await api
			.post('/api/users')
			.send(newUser)
			.expect(400)

		const usersAtEnd = await helper.usersInDb()
		expect(usersAtEnd).toHaveLength(usersAtStart.length)
	})
})

afterAll(() => {
	mongoose.connection.close()
})