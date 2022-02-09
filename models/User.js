const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [2, "Username cannot be with less then 2 characters!"],
        validate: [/^[a-zA-Z0-9]+$/, "Username should consist of english letters and digits"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9]+$/, "Username should consist of english letters and digits!"],

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