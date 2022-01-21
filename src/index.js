const express = require("express");

const app = express();

app.all("/", (req, res) => {
    res.send("Hello World");
    res.end();
})

app.listen(5000, () => { console.log("Server is running on port 5000") });
