import PostMessage from '../models/postMessage.js';
//This gives access to real model.

export const getPost = async(req,res)=> {
    //create(err)Try&Catch Block
    
    try{
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

//When testing it gives empty array. 
export const createPost = async(req,res)=>{
//Need to go to frontend after to format post.

    const post = req.body;
    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    }catch(error){

        res.status(409).json({message:error.message});
    }
}
//https://www.restapituturial.com/httpstatuscodes.html
//http status Code: 200's(succesful),300's(Redirection),400's(client err)

    
