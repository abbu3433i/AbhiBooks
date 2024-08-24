import User from "../model/userModel.js";
import bcrypt from 'bcryptjs'

export const signup = async(req,res)=>{
    try {
        const { fullname ,email ,password } = req.body;
        console.log(req.body);
        
        const milgya =await User.findOne({email});
        
        if (milgya) {
           return res.status(400).json({message:"user already exist"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullname : fullname,
            email : email,
            password : hashPassword,
        });
       await createdUser.save();
        res.status(200).json({message:"user created successfully",
            milgya: {  //-----------------jo user mila he database me uski detail save karke rakh lo and frontend me bhej do.
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        },});
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const userfound = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, userfound.password);  //userfind ka password and jo password de rhe hen uska password compare karo.

        if (!userfound || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                userfound: {  //-----------------jo user mila he database me uski detail save karke rakh lo.
                    _id: userfound._id,
                    fullname: userfound.fullname,
                    email: userfound.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};