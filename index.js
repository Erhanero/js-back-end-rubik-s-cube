const express = require("express");
const handlebars = require("express-handlebars");

const hbs = handlebars.create({
    extname: ".hbs"
})

const app = express();

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static("static"))

app.all("/", (req, res) => {
    res.render("index", { layout: false });
})

app.listen(5000, () => { console.log("Server is running on port 5000") });
