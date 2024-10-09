const express = require('express')

const router = express.Router()

// Handle POST requests to '/'
router.post('/', function (req, res) {
    // Redirect to the Wikipedia page based on the search term
    res.redirect(`https://en.wikipedia.org/wiki/${req.body.search}`)
})

module.exports = router