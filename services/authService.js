const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(username, password, repeatPassword) {

    return await User.create({ username, password })

}

async function login(username, password) {
    try {
        const user = await User.findByUsername(username);
        if (user) {
            const isValid = await bcrypt.compare(password, user.password);

            if (isValid) {
                return user;
            }
            else {
                throw new Error("Username or password are invalid!");

            }
        } else {
            throw new Error("Username or password are invalid!");

        }
    } catch (err) {
        console.log(err.message);
    }
}

function createToken(user) {
    let payload = {
        _id: user._id,
        username: user.username
    }

    let secret = "2T34X2DS223G7873H45"

    const token = jwt.sign(payload, secret);
    return token;

}


module.exports = {
    register,
    login,
    createToken
}