const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')


const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./books.sqlite');

// /admin/add
router.get('/', (req, res, next) => {
	console.log(req.query);
	
	if ('isbn' in req.query) {
		db.all("SELECT * FROM books WHERE isbn=$isbn", {$isbn: req.query.isbn}, function(err, row) {
			if (row.length == 1) {
				
				let curbook = row[0];
			
				fs.readFile(path.join(__dirname, '..', 'views', 'detail.html'), 'utf8', (err, page) => {
					if (err) {
						console.error(err);
						return;
					}

					page = page.replace('{%isbn%}', curbook.isbn)
					page = page.replace('{%title%}', curbook.title)
					page = page.replace('{%author%}', curbook.author)
					page = page.replace('{%description%}', curbook.description)

					res.setHeader('Content-Type', 'text/html')
					res.write(page)
					res.end();
				});
			} else {
				res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'))
			}
		})
	} else {	
		res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'))
	}

})

module.exports = router; 