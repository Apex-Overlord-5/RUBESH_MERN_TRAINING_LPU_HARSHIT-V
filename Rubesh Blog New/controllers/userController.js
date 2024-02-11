const userModel =  require('../models/userModel')

//create user register user
exports.registerController = async (req, res ) => {
    try{
        const {username, email, password} = req.body

    }catch(error){
        console.log(error)
        return res.status(500).send({
            message: 'Error in Register Callback',
            success: false,
            error 
        })

    }
};

// get all users
exports.getAllUsers = () => {};

//login
exports.loginController = () => {};