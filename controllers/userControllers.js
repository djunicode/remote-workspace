import {User} from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (req, res) => {
  try {
    const { username,password,email } = req.body;
    console.log("hello");
    const registrationData = await User.findOne({email});
    if (registrationData) {
      return res.status(400).json({ error: "Registration already done" });
    };
    if(!username || !password || !email ){
      return res.status(400).json({error : "fill all the feilds"});
    }
  
    if (!registrationData) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      const newUser = new User({ username, email, password: hashedPassword, isVerified: true });
      await newUser.save();
      res.status(200).json({ message: "account registered" });
    } 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "registratoion failed" });
  }
};

const login = async (req,res)=>{
    try {
        const {email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d', 
        });

        res.status(200).json({userId: user._id, message: 'Login successful.', token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}

const getMyProfile = async(req,res)=>{
    try{
        
            const user = await User.findById(req.userId);
            res.status(200).json({message: 'Authenticated route', userId: req.userId, user});

        }
    catch(error){
        console.log(error);
        res.status(500).json({message:"error"})
    }
}

const getProfile = async (req, res) => {
    try {
      const users = await User.find({}, { username: 1 }); // Fetching only the username field
      res.status(200).json({ message: 'Authenticated route', users });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

export {  register, login ,getProfile,getMyProfile};