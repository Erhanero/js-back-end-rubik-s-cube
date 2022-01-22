const express = require("express");
const cubeService = require("../services/cubeService");

const router = express.Router();



router.get("/", (req, res) => {
    let cubes = cubeService.getAll();
    console.log(cubes)
    res.render("index", { cubes });
});

router.get("/about", (req, res) => {
    res.render("about")
})

module.exports = router;
