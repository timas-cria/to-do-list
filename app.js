const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('<div><h1>Olá Mundo!</h1></div>')
})

app.listen(3000, () => {
    console.log("servidor iniciado")
})