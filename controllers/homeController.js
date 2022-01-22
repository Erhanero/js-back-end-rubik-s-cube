const express = require("express");
const cubeService = require("../services/cubeService");

const router = express.Router();



router.get("/", (req, res) => {
    let cubes = cubeService.getAll();
    res.render("index", { cubes });
});

router.get("/about", (req, res) => {
    res.render("about");
})

router.get("/details/:id", (req, res) => {
    let cube = cubeService.getCube(req.params.id);
    res.render("details", { cube });

})

module.exports = router;
