// Replace the names in the next line
const Author = require("../models/author.model");

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
        .then((newAuthor) => {
            console.log("New Author:");
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err) => {
            console.log(`createAuthor failed: ${err}`);
            // For Falidations: copy for both create and update functions 400 status means that the client is talking to the server but not giving in good data. Returns all of the validation errors.
            res.status(400).json(err);
        });
    },

    getAllAuthors: (req, res) => {
        Author.find({})
        .then((allAuthors) => {
            console.log("All Authors:")
            console.log(allAuthors);
            res.json(allAuthors);
        })
        .catch((err) => {
            console.log(`getAllAuthors failed: ${err}`);
            res.json({
                message: "Something went wrong while retrieving all authors.",
                error: err
            });
        });
    },

    getOneAuthor: (req, res) => {},

    updateAuthor: (req, res) => {},

    deleteAuthor: (req, res) => {}
};
