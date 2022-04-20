const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Need to have a name inorder to save the author!"], 
        minlength: [3, "Name needs to be at least 3 characters!"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
