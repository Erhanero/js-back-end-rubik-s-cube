const express = require("express");
const accessoryService = require("../services/accessoryService");
const cubeService = require("../services/cubeService");


const router = express.Router();

router.get("/create/accessory", (req, res) => {
    res.render("createAccessory");
})

router.post("/create/accessory", async (req, res) => {
    const { name, imageUrl, description } = req.body;
    await accessoryService.create(name, imageUrl, description);
    res.redirect("/")
})

router.get("/:cubeId/add/accessory", async (req, res) => {

    let cube = await cubeService.getCube(req.params.cubeId);
    let accessories = await accessoryService.getAllWithout(cube.accessories.map(x => x._id));
    res.render("attachAccessory", { cube, accessories });
});

router.post("/:cubeId/add/accessory", async (req, res) => {
    const cubeId = req.params.cubeId
    await accessoryService.atachAccessory(cubeId, req.body.accessory);

    res.redirect(`/details/${cubeId}`)

});

module.exports = router;