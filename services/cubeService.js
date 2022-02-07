const Cube = require("../models/Cube");

const getAll = () => Cube.find({}).lean();

const getCube = (id) => Cube.findById(id).populate("accessories").lean();

const create = (name, description, imageUrl, difficultyLevel) => {

    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficultyLevel,

    });

    return cube.save();
}

const deleteCube = async (id) => {
    await Cube.findByIdAndDelete(id);
}

const updateCube = async (id, cube) => {
    await Cube.findByIdAndUpdate(id, cube)
}
const cubeService = {
    create,
    getAll,
    getCube,
    deleteCube,
    updateCube
}

module.exports = cubeService;