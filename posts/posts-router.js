const express = require('express')
const db = require('../data/db');
const router = express.Router();

router.get('/', (req, res) => {
    db.find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;