const express = require("express");
const cubeService = require("../services/cubeService");

const router = express.Router();
router.get("/create", (req, res) => {

    res.render("create");
});

router.post("/create", async (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create(name, description, imageUrl, difficultyLevel);

    res.redirect("/");
})

module.exports = router;