const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.engine("hbs", handlebars({
    extname: "hbs"
}));
app.set("view engine", "hbs");

app.all("/", (req, res) => {
    res.send("Hello World");
    res.render("index", { layout: false });
})

app.listen(5000, () => { console.log("Server is running on port 5000") });
