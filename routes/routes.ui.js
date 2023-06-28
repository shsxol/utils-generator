const express = require("express");

const router = express.Router();
const CC= require("currency-converter-lt");

router.get("/",(req,res) =>{
    res.render("index");
});

router.get("/about",(req,res) =>{
    res.render("about");
});

router.get("/contact",(req,res) =>{
    res.render("contact");
});


router.get("/products",(req,res) =>{
    res.render("products");
});

router.get("/single-product",(req,res) =>{
    res.render("single-product");
});

router.get("/converter/:currency1/:currency2/:value",async(req,res) =>{
    const { currency1, currency2, value} = req.params;

    

    
        const currencyConverter = new CC ({
            from: currency1,
            to: currency2,
            amount: Number(value)
        });

        const result = await currencyConverter.convert();


    res.send(`hello ${result}`);

});


module.exports = router;

//url/pattern matching  abc*def