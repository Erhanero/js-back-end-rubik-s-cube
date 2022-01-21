const express = require("express");

const router = express.Router();

router.get("/create", (req, res) => {
    res.render("create", { layout: false });
});

module.exports = router;