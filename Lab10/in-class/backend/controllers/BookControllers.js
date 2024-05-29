const { Book } = require('../models/Book.js');

module.exports = {

    getAll(req, res) {
        Book.findAll({})
            .then(books => res.json({
                error: false,
                data: books
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },
    async getOne(req, res, next) {
        const param = req.params.isbn;
        const book = await Book.findOne({ where: { isbn: param } })
            .catch(next);
        if(book) {
            res.json({
                error: false,
                data: book
            })
        } else {
            res.json({
                error: true,
                data: [],
                error: `Book with isbn ${param} not found!`
            })
        }
    }

}
