const mongoose = require("mongoose");


const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        mingLength: 3,
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^https?:\/\//i.test(value)
            },
            message: "Image Url is invalid!"
        }
    },
    difficultyLevel: {
        type: Number,
        require: true,
        min: 1,
        max: 5
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Accessory"
        }
    ],

    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

const Cube = mongoose.model("Cube", cubeSchema);


module.exports = Cube;
