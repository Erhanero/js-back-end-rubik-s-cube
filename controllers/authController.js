const router = require("express").Router();
const authService = require("../services/authService");

router.get("/login", (req, res) => {
    res.render("loginPage");
});

router.post("/login", (req, res) => {

});

router.get("/register", (req, res) => {

    res.render("registerPage");
});

router.post("/register", (req, res) => {
    const { username, password, repeatPassword } = req.body
    authService.register(username, password, repeatPassword)
})

module.exports = router;