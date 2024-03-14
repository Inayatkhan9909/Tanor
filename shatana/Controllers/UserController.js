
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const {SECRET_KEY} = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");


const RegisterHandle = async (req, res) => {
    try {

        const { fullname, username, email, address, contact, password } = req.body;

        if (fullname != "" && username != "" && email != "" && address != "" && contact != "" && password != "") {

            const exist = await User.findOne({ username });
            if (!exist) {
                const hashpassword = await bcrypt.hash(password, 10);

                const newUser = new User({ fullname, username, email, address, contact, password: hashpassword });
                const success = await newUser.save();
                if (success) {
                    res.json({ message: "Registration successfull" });
                }
                else {
                    res.json({ message: "Registration failed" });
                }
            }
            else {
                res.json({ message: "User already exists" });
            }

        }
        else {
            res.json({ message: "All fields required" });
        }


    } catch (error) {
        console.log(error)
        res.json({ message: "Something went wrong" });
    }

}


const LoginHandle = async (req, res) => {

    try {
        const { username, password } = req.body;
        
        if (username != "" && password != "") {
            const exist = await User.findOne({ username });
            if (exist) {

                const passverify = await bcrypt.compare(password, exist.password)
                if (passverify) {

                   const token = jwt.sign(
                    {
                        userId:exist._id,
                        username:exist.username
                    },SECRET_KEY
                   );
                   
                   res.cookie("token",token)

                    res.json({message:"logged in successfully",token});
                }
                else {
                    res.json({message:"Password doesnot match"});
                }

            }
            else {
                res.json({message:"User not found" });
            }

        }
        else {
            res.json({message: "All fields required" });
        }


    }
    catch (error) {
        console.log(error)
        res.json({ message: "Something went wrong" });
    }

}
module.exports = { RegisterHandle, LoginHandle }