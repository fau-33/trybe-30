const bookService = require('../services/BookService');

const getAll = async (req, res) => {
    const books = await bookService.getAll();
    return res.status(200).json(books);
};

module.exports = {
    getAll,
}