const express = require('express')
const router = express.Router()

const fs = require('fs')
const path = require('path')

router.get('/', (req, res, next) => {
	res.setHeader('Content-Type', 'text/html')
	// Return the html index page
	return res.end()
})

module.exports = router; 
