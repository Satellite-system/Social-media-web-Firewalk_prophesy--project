const { default: mongoose } = require('mongoose');
const PostMessage = require('../models/postMessage.js');

exports.getPosts = async (req, res)=>{
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

exports.createPost = async (req, res)=>{
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({error: error.message});
    }

}

exports.updatePost = async (req, res)=>{
    const{id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Something went Wrong ☹️')
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    return res.json(updatedPost);
}