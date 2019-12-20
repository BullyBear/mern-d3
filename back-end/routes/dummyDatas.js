const express = require('express')
const router = express.Router()
const dummyData = require('../models/dummyData')




router.get('/get', async (req, res) => {
    let query = JSON.parse(req.query.where);
    try {
		c//onst dummyDatas = await dummyData.find(query)
		const dummyDatas = await dummyData.find(query)
		res.json(dummyDatas)
	} catch (err) {
		res.status(500).json({ message: err.message})
	}
})


router.get('/get/:id', getDummyData, (req, res) => {
	res.json(res.dummyD)
})


router.post('/post', async (req, res) => {
    console.log(req.body);
	const dummyD = new dummyData({
		date: req.body.date,
		value: req.body.value
	})

	try {
		const newDummy = await dummyD.save()
		res.status(201).json(newDummy)
	} catch (err) {
		res.status(400).json({ message: err.message})
	}
})


router.patch('/patch/:id', getDummyData, async (req, res) => {
	if (req.body.date != null) {
		res.dummyD.date = req.body.date
	}
	if (req.body.value != null) {
		res.dummyD.value = req.body.value
	}
	try {
		const updatedDummy = await res.dummyD.save()
		res.json(updatedDummy)
	} catch (err) {
		res.status(400).json({ message: err.message})
	}
})


router.delete('/delete/:id', getDummyData, async (req, res) => {
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



/*
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
		centerX: req.body.centerX,
		centerY: req.body.centerY,
		radius: req.body.radius
	})

	try {
		const newDummy = await dummyD.save()
		res.status(201).json(newDummy)
	} catch (err) {
		res.status(400).json({ message: err.message})
	}
})


router.patch('/:id', getDummyData, async (req, res) => {
	if (req.body.centerX != null) {
		res.dummyD.centerX = req.body.centerX
	}
	if (req.body.centerY != null) {
		res.dummyD.centerY = req.body.centerY
	}
	if (req.body.radius != null) {
		res.dummyD.radius = req.body.radius
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
*/




module.exports = router



