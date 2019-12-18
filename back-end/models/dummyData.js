const mongoose = require('mongoose')

const dummySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	subscribedChannel: {
		type: String,
		required: true
	},
	subscribeDate: {
		type: Date,
		required: true,
		default: Date.now
	}
})

module.exports = mongoose.model('dummyData', dummySchema)