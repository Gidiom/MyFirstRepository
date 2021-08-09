const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

const PRODUCTS = [
    { id: 111, name: 'AAAA', description: 'This is product AAAA', price: 200 },
    { id: 222, name: 'BBBB', description: 'This is product BBBB', price: 300 },
    { id: 333, name: 'CCCC', description: 'This is product CCCC', price: 400 }
    { id: 444, name: 'DDDD', description: 'This is product DDDD', price: 500 }]

    // adding to cart in hard coded way
const CART = [
    { name: 'AAAA', price: 200, quantity: 3 },
    { name: 'CCCC', price: 400, quantity: 5}]

var prodIndex;
app.get('/product/:id', (req, res) => {
     prodIndex= PRODUCTS.findIndex(pr=>pr.id===parseInt(req.params.id));
     if(prodIndex<0){
        res.send("The requested product is not available");
     }
     else{
        res.render("product", {
            id:PRODUCTS[prodIndex].id,
            name:PRODUCTS[prodIndex].name,
            description:PRODUCTS[prodIndex].description,
            price:PRODUCTS[prodIndex].price
            });
     }
});

app.post('/addToCart', (req, res) => {
    //dynamically adding products to cart
    CART.push(PRODUCTS.find(e => e.id === parseInt(req.body.id)));
    res.render("shoppingcart", {
        products: CART
    });
});

app.listen(3000);
