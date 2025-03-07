import User from '../models/user.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


const register = async(req,res) => {
           
        try {
            const user = req.body;
            const existingUser = await User.findOne({
                $or: [{ username: user.username }, { email: user.email }]
            });
            if(existingUser){
                res.status(404).json({
                    message : "User already exits"
                })
            }
            else {

                const salt = await bcrypt.genSalt(10)
                const hashpassword = await bcrypt.hash(user.password,salt)
                const newUser = await User.create(
                   {
                           username:user.username,
                           email:user.email,
                           password:hashpassword,
                           role : user.role

                   }
                )
                await newUser.save()
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
            res.status(404).json({
                message:"shit aint shiting"
            })
        }


};


const loginUser = async(req,res) => {
       try {

            const {email , username,password } = req.body

            

            const findUser = await User.findOne({$or:[{username:username},{email:email}]})
            
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