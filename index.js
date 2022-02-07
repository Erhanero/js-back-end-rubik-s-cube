const express = require("express");
const routerController = require("./routes");
const handlebars = require("express-handlebars");
const initDataBase = require("./services/database");
const cookieParser = require("cookie-parser");

const hbs = handlebars.create({
    extname: ".hbs"
})

const app = express();

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(cookieParser());
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(routerController);


app.listen(3000, () => { console.log("Server is running on port 3000") });

try {
    initDataBase();

} catch (err) {
    console.log(err.message);
}
