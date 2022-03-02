const { mongoose } = require('mongoose');
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

exports.deletePost = async (req, res)=>{
    const {id:_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Something went Wrong ☹️");
    }
    
    await PostMessage.findByIdAndRemove(_id);
    res.json({success: "Post Deleted Successfully"});
}


exports.updatePost = async (req, res)=>{
    const{id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Something went Wrong ☹️');
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    return res.json(updatedPost);
}

exports.likePost = async (req,res)=> {
    const {id:_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Something went Wrong ☹️');
    }

    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount + 1},{new:true});
    res.json(updatedPost);
}