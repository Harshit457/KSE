const express = require('express');
const router = express();
const cors = require('cors');
const User = require("./db")
const { sign, verify } = require("jsonwebtoken");
router.use(express.json());
router.use(cors())
router.post('/signup', async (req, res) => {
    const { email,FirstName,LastName, contactNo, skill, yearOfStudy, password,Username,about,Branch,Section } = req.body;
    console.log(password);
    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

       
        const newUser = new User({
            email,
            password: password,
            FirstName,
            LastName,
            contactNo,
            skill,
            yearOfStudy,
            Username,
            about,
            Branch,
            Section
        });
        const token = await sign({id: newUser.id},"harshit")
        await newUser.save();
        return res.json({
            jwt: token
        }
        )
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});
router.post('/signin',async (req,res)=>{
    const { email,password } = req.body;
    try{
    const user = await User.findOne({email: email, password: password})
    if(!user){
        return res.status(404).json({ message: 'Email not found' });
    }
    const jwt = await sign({id: user.id},"harshit")
    return res.json({
        jwt
    })
    }catch(e){

    }
})
router.use("/first/profile/*",async (req,res,next)=>{
    const authHeader = req.header("authorization") || "";
    
    try{
        const user = await verify(authHeader,"harshit");
        if(user){
            res.set("userId",user.id);
            next();
        }
        else{
            res.status(403);
           return res.json({
                message: "you are not logged in"
            })
        }
    }catch(e){
        res.status(403);
        return res.json({
            message: "you are not logged in"
        })
    }
})
router.get("/first/profile/:username",async (req,res)=>{
    const username = req.params.username;
    try{
        const profile = await User.findOne({Username: username})
        if(!profile){
            return res.status(404).send("user not found")
        }
        res.json({
            FirstName: profile.FirstName,
            LastName: profile.LastName,
            Username: profile.Username,
            email: profile.email,
            skill: profile.skill,
            yearOfStudy: profile.yearOfStudy,
            about: profile.about,
            Branch: profile.Branch,
            Section: profile.Section,
            credits: profile.credits
        })
    }
    catch(e){
        console.error(e);
        res.status(500).send('Server error');
    }
})
router.listen(3000);
