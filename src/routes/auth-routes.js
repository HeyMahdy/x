import express from 'express';
import {register,loginUser,logoutUser,ResetPassword} from '../controllers/auth-controller'

const router = express.Router();

router.post("/signin/:id",register);

router.post("/login",loginUser);

router.post("/logout",logoutUser);

router.post("/resetPassword",ResetPassword);


export default router;