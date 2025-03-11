import pkg from '@prisma/client';
const {PrismaClient } = pkg;
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient()







const register = async(req,res) => {
           
        try {
            const user = req.body;
            const existingUser = await prisma.user.findFirst({
                where : {
                    OR : [
                        {email : user.email},
                        {username : user.username }
                    ]
                }
            });
            if(existingUser){
                res.status(404).json({
                    message : "User already exits"
                })
            }
            else {

                const salt = await bcrypt.genSalt(10)
                const hashpassword = await bcrypt.hash(user.password,salt)
                const newUser = await prisma.user.create({
                    data:{
                        email : user.email,
                        password : hashpassword,
                        username : user.username
                    }
                });
                
                
                if(newUser){
                    res.status(200).json({
                        message:"user created"
                    })
                }
                else {
                    res.status(404).json({
                        message : "unable to create user"
                    })
                }
                
            }

        }
        catch(error){
            console.log(error)
            res.status(404).json({
                message:"server error"
            })
        }


};


const loginUser = async(req,res) => {
       try {

            const {email , username,password } = req.body

            

            const findUser = await prisma.user.findFirst({
                where : {
                    OR : [
                        {email : email},
                        {username : username }
                    ]
                }
            })
              
            
            if(!findUser){
                res.status(400).json({
                    message : "invalid username or email"
                })
            }

            const checkPassword = await bcrypt.compare(password,findUser.password)
            console.log(checkPassword)
            if(!checkPassword){
                res.status(400).json({
                    message: "invalid passowrd"
                })
            }
            const token = jwt.sign({ userId: findUser._id , role:findUser.role}, 'your-secret-key', {
                expiresIn: '1h',
                });
            
            res.status(201).json({
                token_data:token
            })
        }

       catch(error){

        res.status(404).json({
            message:"server error"
        })


       }
};

const logoutUser = async(req,res) =>{

};

const ResetPassword = async(req,res) => {

};

export {register,loginUser,logoutUser,ResetPassword}