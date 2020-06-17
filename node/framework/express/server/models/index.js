const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    title: String,
    content: String
});
exports.PostsModel = mongoose.model('Posts', PostsSchema);
