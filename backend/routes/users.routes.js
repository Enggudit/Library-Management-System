const express = require('express');
const router = express.Router();
const {valitionresult} = require("express-validator");
const userController = require('../controllers/users.controllers')
const authMiddellware = require('../middlewares/auth.middlewares');



router.post('./register',[
    body('email').isEmail().withMessage('Invalid Emaill/Password'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('first name must be at least 3 charachet long'),
    body('password').isLength({min : 6}).withMessage('password must be at least 6 charachet long'),
    body('period')
],

    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Emaill/Password'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('first name must be at least 3 charachet long'),],

    userController.loginUser
)

router.get('/profile',authMiddellware.authuser, userController.getUserProfile)
router.get('/logout', authMiddellware.authuser, userController.logoutUser)



module.exports = router;
