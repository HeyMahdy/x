import express from 'express';

import  {getAllPosts,getPostById,UpdatePost,DeletePost,savePost} from '../controllers/post-controler.js'


const router = express.Router();


// Get all posts
router.get("/get",getAllPosts);

router.get("/get/:id",getPostById);

router.post("/update/:id",UpdatePost);

router.post("/add",savePost);




export default router;

