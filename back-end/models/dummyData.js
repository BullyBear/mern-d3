const mongoose = require('mongoose')




const dummySchema = new mongoose.Schema({
	date: {
		type: Date,
		required: true
	},

	value: {
		type: Number,
		required: true
	}
})



/*
const dummySchema = new mongoose.Schema({
	
	centerX: {
		type: Number,
		required: true
	},

	centerY: {
		type: Number,
		required: true
	},

	radius: {
		type: Number,
		required: true
	}

})
*/



//module.exports = mongoose.model('dummyData', dummySchema, 'barChart')
module.exports = mongoose.model('dummyData', dummySchema)