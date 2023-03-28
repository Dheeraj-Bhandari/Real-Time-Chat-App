const User = require("../database/model/user.model")


exports.addUser = async (req, res)=>{

    try {

        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(500).json({error : "All Field is Required"});
        }
        const newUser = await User.create({
            name : name,
            email : email,
            password : password
        })
        await newUser.save();

        return res.status(200).json({status : true, User : newUser})
    } catch (error) {
        return  res.status(500).json({error : error})
    }
}