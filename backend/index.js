const express = require('express');
const router = express();
const cors = require('cors');
const User = require("./db")
const { sign, verify } = require("jsonwebtoken");
router.use(express.json());
router.use(cors())
router.post('/signup', async (req, res) => {
    const { email,FirstName,LastName, contactNo, skill, yearOfStudy, password } = req.body;
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
            yearOfStudy
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
router.listen(3000);
