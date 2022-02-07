const router = require("express").Router();
const authService = require("../services/authService");

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await authService.login(username, password);

    if (user) {
        const token = authService.createToken(user);
        res.cookie("app_token", token, {
            httpOnly: true
        })
        res.redirect("/");
    } else {

        res.redirect("/404")
    }
});

router.get("/register", (req, res) => {

    res.render("register");
});

router.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await authService.register(username, password);
    res.redirect("/login");
})

module.exports = router;