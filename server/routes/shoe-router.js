const express = require('express')

const ShoeCtrl = require('../controllers/Shoe-ctrl')

const router = express.Router()

router.post('/Shoe', ShoeCtrl.createShoe)
router.put('/Shoe/:id', ShoeCtrl.updateShoe)
router.delete('/Shoe/:id', ShoeCtrl.deleteShoe)
router.get('/Shoe/:id', ShoeCtrl.getShoeById)
router.get('/Shoes', ShoeCtrl.getShoes)

module.exports = router
