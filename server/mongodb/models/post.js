import mongoose from 'mongoose';

// Creates the Scheme for the MongoDB database. A post requires a name, prompt, and photo.
const Post = new mongoose.Schema({
    name: { type: String, requried: true},
    prompt: { type: String, requried: true},
    photo: { type: String, requried: true},
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;