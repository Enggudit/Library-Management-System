const userModel =  require('../models/user.model');
const bcrypt= require('bcrypt');
const jwt =require('jsonwebtoken');


module.exports.authuser = async (req, res, next) =>{
    const token = req.cookies.token || re.header.authorization?.spilt(' ')[1];


    if(!token){
        return res.status(401).json({message: 'Unathorized'});
    }


    const isBlackListed = await userModel.findOne({ tokens: token});

    if(!isBlackListed){
        return res.status(401).josn({message: 'Unathorized'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        
        req.user = user;

        return next();

    } catch(err){
        return res.status(401).json({message: 'Unathorized Login'})
    }
}