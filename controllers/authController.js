const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("loginPage");
});

module.exports = router;