const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const products = require("./products");

app.use(cors()); 

app.get("/api/home", (req, res) => {
    res.json({ products });
});

app.get("/api/product/:productId", (req, res) => {
    const productId = parseInt(req.params.productId);
    const product = products.find(product => product.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

app.listen(PORT, () => {
    console.log("server started on PORT 5000");
});
