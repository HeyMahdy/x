import express from 'express';
import AuthMiddleware from '../middlewares/auth-middlewares.js'
import  {getAllPosts,getPostById,UpdatePost,DeletePost,savePost} from '../controllers/post-controler.js'


const router = express.Router();


// Get all posts
router.get("/getAll",AuthMiddleware,getAllPosts);

router.get("/get/:id",AuthMiddleware,getPostById);

router.post("/update/:id",AuthMiddleware,UpdatePost);

router.post("/save",AuthMiddleware,savePost);




export default router;

