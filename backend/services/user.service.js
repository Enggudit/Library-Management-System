const userModel = require('../models/user.model');


module.exports.createUser = async ({
    firstname, lastname, email, password, period
})=>{
    if(!firstname || !email || !password || !period){
        throw new Error('All fields are required');
    }

    const user  =  userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        period
    })

    return user;
}