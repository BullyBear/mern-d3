const express = require('express')
const router = express.Router()
const dummyData = require('../models/dummyData')


/*
router.get('/', (req, res) => {
	res.send('Sup Bro')
})
*/


router.get('/', async (req, res) => {
	try {
		const dummyDatas = await dummyData.find()
		res.json(dummyDatas)
	} catch (err) {
		res.status(500).json({ message: err.message})
	}	
})


router.get('/:id', getDummyData, (req, res) => {
	res.json(res.dummyD)
})


router.post('/', async (req, res) => {
	const dummyD = new dummyData({
		name: req.body.name,
		subscribedChannel: req.body.subscribedChannel
	})

	try {
		const newDummy = await dummyD.save()
		res.status(201).json(newDummy)
	} catch (err) {
		res.status(400).json({ message: err.message})
	}
})


router.patch('/:id', getDummyData, async (req, res) => {
	if (req.body.name != null) {
		res.dummyD.name = req.body.name
	}
	if (req.body.subscribedChannel != null) {
		res.dummyD.subscribedChannel = req.body.subscribedChannel
	}
	try {
		const updatedDummy = await res.dummyD.save()
		res.json(updatedDummy)
	} catch (err) {
		res.status(400).json({ message: err.message})
	}
})


router.delete('/:id', getDummyData, async (req, res) => {
	try {
		await res.dummyD.remove()
		res.json({ message: 'Deleted this dummy'})
	} catch (err) {
		res.status(500).json({ message: err.message})
	}
})


async function getDummyData(req, res, next) {
	try {
		dummyD = await dummyData.findById(req.params.id)
		if (dummyD == null) {
			return res.status(404).json({ message: 'Cant find dummy'})
		}
	} catch (err) {
		return res.status(500).json({ message: err.message})
	}

	res.dummyD = dummyD
	next()
}


module.exports = router 



