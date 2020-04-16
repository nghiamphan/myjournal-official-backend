const mongoose = require('mongoose')

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
	words_of_today: [],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
})

journalSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

module.exports = mongoose.model('Journal', journalSchema)