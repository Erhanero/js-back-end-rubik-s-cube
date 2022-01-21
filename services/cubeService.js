const Cube = require("../models/Cube");

// const cubeDb = [];

// const getAll = () => cubeDb.slice();
const getAll = () => Cube.getAll();
const create = (name, description, imageUrl, difficultyLevel) => {

    let cube = new Cube(name, description, imageUrl, difficultyLevel);

    Cube.add(cube)
}

const cubeService = {
    create,
    getAll
}

module.exports = cubeService;