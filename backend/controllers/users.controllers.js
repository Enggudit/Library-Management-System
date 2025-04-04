const userModel =  require('../models/user.model');
const userService = require('../services/user.service')
const {validationResult } = require('express-validator')


module.exports.registerUser = async(req, resizeBy, next) =>{

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