// Replace the controler with the proper names
const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    // Export all of the routes from the controller functions
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
};
