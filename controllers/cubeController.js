const express = require("express");
const cubeService = require("../services/cubeService");
const { isAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

// router.use(isAuth)

router.get("/create", isAuth, (req, res) => {

    res.render("create");
});

router.post("/create", isAuth, async (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create(name, description, imageUrl, difficultyLevel);

    res.redirect("/");
});

router.get("/:id/edit", isAuth, (req, res) => {
    res.render("edit");
});

router.get("/:id/delete", isAuth, async (req, res) => {
    const cube = await cubeService.getCube(req.params.id);
    res.render("delete", { cube });
});

module.exports = router; 