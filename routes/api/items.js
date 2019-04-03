const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/item');

// @route GET api/items
// @description: GET all items
// @access: public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
})

// @route POST api/items
// @description: add an item
// @access: public
router.delete('/:id', (req, res) => {
    item.findById(req.params.id)
    .then(item => item.remove().then(() => {res.json({success: true})}))
    .catch(err => res.status(404).json({success: false}));
})


// @route POST api/items
// @description: add an item
// @access: public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

module.exports = router;