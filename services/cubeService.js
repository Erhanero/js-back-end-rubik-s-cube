const Cube = require("../models/Cube");

// const cubeDb = [];

// const getAll = () => cubeDb.slice();
const getAll = () => Cube.find({}).lean();

const getCube = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficultyLevel) => {

    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficultyLevel,

    });

    return cube.save();
}

const cubeService = {
    create,
    getAll,
    getCube
}

module.exports = cubeService;