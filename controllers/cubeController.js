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
});

router.get("/:id/edit", (req, res) => {
    res.render("edit");
});

router.get("/:id/delete", (req, res) => {
    console.log(req.user)
    if (!req.user) {
        return res.redirect("/login");
    }
    res.render("delete");
});

module.exports = router; 