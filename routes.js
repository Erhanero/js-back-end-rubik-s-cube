const express = require("express");
const router = express.Router();

const cubeController = require("./controllers/cubeController");
const homeController = require("./controllers/homeController");
const accessoryController = require("./controllers/accessoryController");
const authController = require("./controllers/authController");


router.use("/", homeController);
router.use(cubeController);
router.use(accessoryController);
router.use(authController)
router.use("*", (req, res) => {
    res.status(404).render("404");
})

module.exports = router;