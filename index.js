const express = require("express");
const routerController = require("./routes");
const handlebars = require("express-handlebars");

const hbs = handlebars.create({
    extname: ".hbs"
})

const app = express();

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(routerController);

app.listen(5000, () => { console.log("Server is running on port 5000") });
