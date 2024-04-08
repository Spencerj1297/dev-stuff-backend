const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const products = require("./products");

app.use(cors()); 

app.get("/api/home", (req, res) => {
    res.json({ products });
});

app.listen(PORT, () => {
    console.log("server started on PORT 5000");
});
