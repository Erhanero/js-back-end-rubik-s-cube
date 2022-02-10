const express = require("express");
const cubeService = require("../services/cubeService");
const { isAuth } = require("../middlewares/authMiddleware");
const Cube = require("../models/Cube");

const router = express.Router();

// router.use(isAuth)

router.get("/create", isAuth, (req, res) => {

    res.render("create");
});

router.post("/create", isAuth, async (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create(name, description, imageUrl, difficultyLevel, req.user._id);

    res.redirect("/");
});

router.get("/:id/edit", isAuth, async (req, res) => {
    const cube = await cubeService.getCube(req.params.id);
    res.render("edit", { cube });
});

router.post("/:id/edit", isAuth, async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.updateCube(req.params.id, { name, description, imageUrl, difficultyLevel });
    res.redirect(`/details/${req.params.id}`)
})

router.get("/:id/delete", isAuth, async (req, res) => {
    const cube = await cubeService.getCube(req.params.id);
    res.render("delete", { cube });
});

router.post("/:id/delete", isAuth, async (req, res) => {
    await cubeService.deleteCube(req.params.id);
    res.redirect(`/`);

})
module.exports = router; 