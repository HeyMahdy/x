import express from 'express';
import {register,loginUser,logoutUser,ResetPassword} from '../controllers/auth-controller.js'

const router = express.Router();

router.post("/signin",register);

router.post("/login",loginUser);

router.post("/logout",logoutUser);

router.post("/resetPassword",ResetPassword);


export default router;