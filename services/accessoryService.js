const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube")
async function create(name, imageUrl, description) {
    return Accessory.create({ name, imageUrl, description })
}

async function getAll() {
    return Accessory.find({}).lean();
}

async function atachAccessory(cubeId, accesoryId) {
    let cube = await Cube.findById(cubeId)
    let accessory = await Accessory.findById(accesoryId)
    console.log(cube)
    console.log(accessory)

    cube.accessories.push(accessory);
    return cube.save();
}

const accessoryService = {
    create,
    getAll,
    atachAccessory
}

module.exports = accessoryService;