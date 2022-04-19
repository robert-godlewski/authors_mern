const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Need to have a name inorder to save the author!"], 
        minlength: [2, "Name needs to be at least 2 characters!"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
