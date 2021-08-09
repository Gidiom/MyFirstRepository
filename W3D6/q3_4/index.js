const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

const PRODUCTS = [
    { id: 111, name: 'AAAA', description: 'This is product AAAA', price: 200 },
    { id: 222, name: 'BBBB', description: 'This is product BBBB', price: 300 },
    { id: 333, name: 'CCCC', description: 'This is product CCCC', price: 400 }]

const CART = [
    { name: 'AAAA', price: 200, quantity: 3 },
    { name: 'CCCC', price: 400, quantity: 5}]

app.get('/product/:id', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(e => e.id === parseInt(req.params.id))
    });
});

app.get('/myCart', (req, res) => {
    res.render("shoppingCart", {
        products: CART
    });
});

app.listen(3000);