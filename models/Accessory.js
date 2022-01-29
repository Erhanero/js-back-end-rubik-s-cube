const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^https?:\/\//i.test(value)
            },
            message: "Image Url is invalid!"
        },
        description: {
            type: String,
            required: true,
            maxlength: 100,
        },

    }
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;