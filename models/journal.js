const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('connect to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDb: ', error.message)
	})

const journalSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true
	},
	todos: [],
	reflection: {
		type: String,
		required: true
	},
	book_summaries: [],
	words_of_today: []
})

journalSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

module.exports = mongoose.model('Journal', journalSchema)