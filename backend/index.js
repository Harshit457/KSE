const express = require('express');
const router = express();
const cors = require('cors');
const {User , Query1} = require("./db")

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
        jwt,
        username: user.Username
    })
    }catch(e){
        console.log(e)
            return res.status(500).json({
                msg: "server errr"
            })
    }
})


router.use("/signin/*", async (req, res, next) => {
    // Get the 'Authorization' header
    const authHeader = req.header("Authorization");
    
    // Check if it exists and starts with 'Bearer'
    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.slice(7); // Remove 'Bearer ' prefix to extract the token
        
        try {
            // Verify the JWT token
            const user = await verify(token, "harshit");
            if (user) {
                // Set userId from token
                res.set("userId", user.id);
                next(); // Proceed to the next middleware or route
            } else {
                res.status(403).json({ message: "Invalid token" });
            }
        } catch (e) {
            res.status(403).json({ message: "Invalid or expired token" });
        }
    } else {
        res.status(403).json({ message: "Authorization token missing or malformed" });
    }
});

router.get("/signin/first/profile/:username",async (req,res)=>{
    
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

router.post("/signin/first/post",async (req,res)=>{
    
        const {Development , Creditoffering , Description, mail , requirements } = req.body;
        try{
            const newpost = new Query1({
                Development: Development,
                Creditoffering: Creditoffering,
                Description: Description,
                mail: mail,
                requirements: requirements
            })
            await newpost.save()
            return res.json({
                msg: "post"
            })
        }catch (error) {
            console.error('Error during making post:', error);
            res.status(500).json({ message: 'Server error. Please try again later.' });
        }
})
router.get('/signin/first/post/query', async (req, res) => {
    
    const limit = parseInt(req.query.limit) || 10; // Default limit to 10
    const skip = parseInt(req.query.skip) || 0; // Default skip to 0
  
    try {
      const queries = await Query1.find()
        .limit(limit)
        .skip(skip)
        .exec();
  
      res.json(queries); // Send back the queried data
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: 'Server error' });
    }
  });



router.listen(3000);
