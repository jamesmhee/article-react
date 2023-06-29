const express = require('express')
const router = express.Router()
const { LIST, GET, PUT, POST, DELETE } = require('../controllers/Article_Controller')

router.get('/article/', LIST) // List
router.get('/article/:id', GET) // Read
router.post('/article/', POST) // Create
router.put('/article/:id', PUT) // Edit
router.delete('/article/:id', DELETE) // Remove

module.exports = router
