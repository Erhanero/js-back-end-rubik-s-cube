const express = require("express");
const cubeService = require("../services/cubeService");

const router = express.Router();
router.get("/create", (req, res) => {

    res.render("create");
});

router.post("/create", (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;
    cubeService.create(name, description, imageUrl, difficultyLevel);

    res.redirect("/");
})

module.exports = router;