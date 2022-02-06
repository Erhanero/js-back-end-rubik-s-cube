const router = require("express").Router();
const authService = require("../services/authService");

router.get("/login", (req, res) => {
    res.render("loginPage");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    await authService.login(username, password);
});

router.get("/register", (req, res) => {

    res.render("registerPage");
});

router.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await authService.register(username, password);
    res.redirect("/login");
})

module.exports = router;