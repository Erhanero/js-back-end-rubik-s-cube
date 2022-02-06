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


    cube.accessories.push(accessory);
    return cube.save();
}

async function getAllWithout(id) {
    return await Accessory.find().where("_id").nin(id).lean();

}

const accessoryService = {
    create,
    getAll,
    atachAccessory,
    getAllWithout
}

module.exports = accessoryService;