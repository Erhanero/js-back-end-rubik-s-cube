const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../constants");

const authMiddleware = function (req, res, next) {
    const token = req.cookies.app_token;
    if (!token) {
        return next();
    }

    jwt.verify(token, tokenSecret, function (err, decodedToken) {
        if (err) {
            return res.status(401).redirect("/login");
        }

        req.user = decodedToken;
        next();
    })

}

const isAuth = function (req, res, next) {
    if (!req.user) {
        res.redirect("/login")
    }
    next();
}

module.exports = {
    authMiddleware,
    isAuth
}