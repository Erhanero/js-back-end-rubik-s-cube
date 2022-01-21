const express = require("express");
const router = express.Router();

const cubeController = require("./controllers/cubeController");
const homeController = require("./controllers/homeController");

router.use("/", homeController);
router.use(cubeController);


module.exports = router;