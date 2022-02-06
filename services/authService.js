const User = require("../models/User");
const bcrypt = require("bcrypt");

async function register(username, password, repeatPassword) {

    return await User.create({ username, password })

}

async function login(username, password) {
    try {
        const user = await User.findByUsername(username);
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            return user;
        } else {
            throw new Error("Username or password are invalid!");
        }
    } catch (err) {
        console.log(err.message);
    }


}



module.exports = {
    register,
    login
}