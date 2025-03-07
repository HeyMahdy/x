import express from 'express';
import AuthMiddleware from '../middlewares/auth-middlewares.js'
import  {getAllPosts,getPostById,UpdatePost,DeletePost,savePost} from '../controllers/post-controler.js'


const router = express.Router();


// Get all posts
router.get("/get",AuthMiddleware,getAllPosts);

router.get("/get/:id",AuthMiddleware,getPostById);

router.post("/update/:id",UpdatePost);

router.post("/add",savePost);




export default router;

