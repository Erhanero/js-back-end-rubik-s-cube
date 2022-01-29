const express = require("express");
const cubeService = require("../services/cubeService");

const router = express.Router();



router.get("/", async (req, res) => {
    let cubes = await cubeService.getAll();
    console.log(cubes)
    res.render("index", { cubes });
});

router.get("/about", (req, res) => {
    res.render("about");
})

router.get("/details/:id", async (req, res) => {
    let cube = await cubeService.getCube(req.params.id);
    console.log(cube)
    res.render("details", { cube });

})

module.exports = router;
