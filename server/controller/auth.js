import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import User from "../models/user.js";




export const signup = async (req, res) => {


    const { email, password, confirmPassword, firstName, lastName} = req.body;

  
    try {
        
        const userExist = await User.findOne({email});
        
        if(userExist) return res.status(400).json({ message : "User already exist. "});

        if(password !== confirmPassword) return res.status(400).json( {message: "Pssword does not match. "});

        const hashPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({email, password: hashPassword, name: `${firstName} ${lastName}`});      

        const token = jwt.sign({email: newUser.email, id: newUser._id}, process.env.secretKey, { expiresIn: "2h" });

        console.log("Sucessfully sign up");
        res.status(200).json( { result: newUser, token } );


    } catch (error) {
        res.status(500).json({message : "Something went wrong!"});
    }
    
}


export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {

        const userExist = await User.findOne({email});
        
        if(!userExist) return res.status(404).json({ message : "User does not exist. "});

        const passwordCheck = await bcrypt.compare(password, userExist.password);

        if(!passwordCheck) return res.status(404).json({message: "Password does not match."})

        const token = jwt.sign({email: userExist.email, id: userExist._id}, process.env.secretKey, { expiresIn: "2h" });

        console.log("Sucessfully sign in");

        res.status(200).json( { result: userExist, token } );

        
    } catch (error) {
        res.status(500).json({ message : "Something went wrong!"});
    }
}