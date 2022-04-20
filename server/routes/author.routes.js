// Replace the controler with the proper names
const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    // Export all of the routes from the controller functions
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    //app.get('/api/products/:id', ProductController.findOneProduct);
    //app.put('/api/products/:id', ProductController.updateProduct);
    //app.delete('/api/products/:id', ProductController.deleteProduct);
};
