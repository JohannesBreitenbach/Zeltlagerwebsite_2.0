const express = require('express')

const bodyParser = require('body-parser')

const detailRoutes = require('./routes/book')
const listRoutes = require('./routes/index')

const app = express()

// Define app.locals.books
	
app.use(bodyParser.urlencoded({extended: true}))

// Define routes

app.use((req, res, next) => {
	res.setHeader('Content-Type', 'text/html')
	// HTML Error Handler
	return res.end()
})

app.listen(3000) 