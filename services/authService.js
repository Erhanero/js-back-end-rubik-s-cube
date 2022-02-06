const User = require("../models/User");

async function register(username, password, repeatPassword) {


    return await User.create({ username, password })
}


module.exports = {
    register
}