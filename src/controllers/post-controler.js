import Post from '../models/post.js'
import postDto from '../utils/dto.js'

const getAllPosts = async (req, res) => {
     try {
               
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
    
          
    try {

        const postId = req.params.id;

        const post = await Post.findById(postId); 

        if(!post){
            res.status(400).json(
               {
                message : "no post found"
               }
            )
        }

        else {
            res.status(201).json({
                data : postDto(post)
            })
        }

    }
    catch(error){




    }





};

const UpdatePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const { title, content } = req.body;
  
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, content },
        { new: true, runValidators: true } // Returns updated document
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      res.status(200).json({ message: "Post updated successfully", updatedPost });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
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




