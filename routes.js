const express = require("express");
const router = express.Router();

const cubeController = require("./controllers/cubeController");
const homeController = require("./controllers/homeController");
const accessoryController = require("./controllers/accessoryController");

router.use("/", homeController);
router.use(cubeController);
router.use(accessoryController);
router.use("*", (req, res) => {
    res.render("404")
})

module.exports = router;