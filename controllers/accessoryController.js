const express = require("express");
const accessoryService = require("../services/accessoryService");


const router = express.Router();

router.get("/create/accessory", (req, res) => {
    res.render("createAccessory")
})

router.post("/create/accessory", async (req, res) => {
    const { name, imageUrl, description } = req.body;
    await accessoryService.create(name, imageUrl, description);
    res.redirect("/")
})

module.exports = router;