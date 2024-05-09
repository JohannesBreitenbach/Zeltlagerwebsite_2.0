const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')


// /admin/add
router.get('/', (req, res, next) => {
	console.log(req.query);
	
	res.setHeader('Content-Type', 'text/html')
	// return the detail page
	return res.end()
})

module.exports = router; 