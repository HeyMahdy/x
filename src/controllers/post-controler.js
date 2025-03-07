import express from 'express';
import Post from '../models/post.js'
import postDto from '../utils/dto.js'

const getAllPosts = async (req, res) => {
     try {
               
              const lala = req.userInfo
              console.log(lala)
              const allBooks = await Post.find()
              if(allBooks?.length>0){
                 res.status(200).json({
                     data : allBooks.map(postDto)
                     

                 })
              }
              else {
                 res.status(404).json({
                    message:"no book found"
                 })
              }
     }
     catch(error){
        res.status(404).json({
            message:"error"
        })
     }
};

const getPostById = async (req, res) => {
    res.send("Hello, World!");
};

const UpdatePost = async (req, res) => {
    res.send("Hello, World!");
};

const savePost = async(req,res) => {
     try {
            const newBook = await Post.create(req.body)
            if(newBook){
                res.status(201).json(postDto(newBook))
            }
            else {
                res.status(404).json({message : "invalid"})
            }
     }
     catch(error){
         console.log(error)
     }
}

const DeletePost = async (req, res) => {
    res.send("Hello, World!");
};

export { getAllPosts, getPostById, UpdatePost, DeletePost,savePost };




