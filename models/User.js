const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [2, "Username cannot be with less then 2 characters!"],

    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre("save", async function (next) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;

    next();
});

userSchema.static("findByUsername", async function (username) {
    return await this.findOne({ username });
});

const User = mongoose.model("User", userSchema);

module.exports = User;