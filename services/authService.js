const User = require("../models/User");
const bcrypt = require("bcrypt");

async function register(username, password, repeatPassword) {
    const hashedPassword = await bcrypt.hash(password, 10);

    return await User.create({ username, password: hashedPassword })
}

module.exports = {
    register
}