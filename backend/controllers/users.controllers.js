const userModel =  require('../models/user.model');
const userService = require('../services/user.service')
const {validationResult } = require('express-validator')
const blacklistModel = require('../models/blacklistToken.model')

module.exports.registerUser = async(req, res, next) =>{

    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(404).json({errors: error.array()});
    }

    const { fullname, email, password, period} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.firstname,
        email,
        password: hashedPassword,
        period
    });

    const token = user.generateAuthToken();

    res.json(201).json({token, user});

}

module.exports.loginUser = async(req, res, next) =>{
    const errors = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
        const {email, password}= req.body;

        const user = await userModel.findOne({email}).select('+password');

        if(!user){
            return res.status(401).json({ message: 'Invalid email or password'});
        }


    const isMatch = await user.comparepassword(password);

    if(!isMatch){
        return res.status(401).json({ message: 'Invalid email or password'});
    }

    const token = user.generateAuthToken();


    res.cookie('token', token);

    res.status(200).json({token, user});
}

module.exports.getUserProfile = async(req, res, next) =>{

    res.status(200).json(req.user);
}

module.exports.logoutUser = async(req, res, next) =>{
    res.clearCookie('token');

    const token = req.cookie.token || req.header.authorization.split(' ')[1];

    await blacklistModel.create({token});
    res.status(200).json({message: 'Logged Out'});
}