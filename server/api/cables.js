const router = require('express').Router()

const {Cable} = require('../db/models')

//MOUNTED TO /cable

router.get('/', async (req, res, next) => {
  try {
    const allCables = await Cable.findAll()
    res.json(allCables)
  } catch (err) {
    next(err)
  }
})

// GET /api/cableId
router.get('/:cableId', async (req, res, next) => {
  try {
    const singleCable = await Cable.findByPk(req.params.cableId)
    res.json(singleCable)
  } catch (err) {
    next(err)
  }
})

router.put('/:cableId', async (req, res, next) => {
  try {
    const updatedCable = await Cable.findByPk(req.params.cableId)
    await updatedCable.update(req.body)
    res.json(updatedCable)
  } catch (err) {
    next(err)
  }
})

// POST /api/cable
router.post('/', async (req, res, next) => {
  try {
    const createdCable = await Cable.create(req.body)
    res.json(createdCable)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/cable/cableId
router.delete('/:cableId', async (req, res, next) => {
  try {
    const id = req.params.cableId
    await Cable.destroy({where: {id}})
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
