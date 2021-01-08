const Shoe = require('../models/shoe-model')

createShoe = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a shoe',
        })
    }

    const shoe = new Shoe(body)

    if (!shoe) {
        return res.status(400).json({ success: false, error: err })
    }

    shoe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: shoe._id,
                message: 'Shoe created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Shoe not created!',
            })
        })
}

updateShoe = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Shoe.findOne({ _id: req.params.id }, (err, shoe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Shoe not found!',
            })
        }
        shoe.name = body.name
        shoe.time = body.time
        shoe.rating = body.rating
        shoe
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: shoe._id,
                    message: 'Shoe updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Shoe not updated!',
                })
            })
    })
}

deleteShoe = async (req, res) => {
    await Shoe.findOneAndDelete({ _id: req.params.id }, (err, shoe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!shoe) {
            return res
                .status(404)
                .json({ success: false, error: `Shoe not found` })
        }

        return res.status(200).json({ success: true, data: shoe })
    }).catch(err => console.log(err))
}

getShoeById = async (req, res) => {
    await Shoe.findOne({ _id: req.params.id }, (err, shoe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: shoe })
    }).catch(err => console.log(err))
}

getShoes = async (req, res) => {
    await Shoe.find({}, (err, shoes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!shoes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Shoe not found` })
        }
        return res.status(200).json({ success: true, data: shoes })
    }).catch(err => console.log(err))
}

module.exports = {
    createShoe,
    updateShoe,
    deleteShoe,
    getShoes,
    getShoeById,
}
