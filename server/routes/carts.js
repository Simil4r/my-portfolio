const router = require('express').Router();
let Cart = require('../models/cart.model');

router.route('/').get((req, res) => {
    Cart.find()
        .then(carts => res.json(carts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const cart = new Cart({
        username: req.body.username,
        items: []
    })
    cart.save()
        .then(()=>res.json("Cart added!"))
        .catch(err=>res.status(400).json('Error: '+err));
})

router.route('/getUserCart').post((req, res)=>{
    Cart.findOne({username: req.body.username}, (err, element)=>{
        res.json(element)
    })
})

router.route('/addItem').post((req, res)=>{
    Cart.findOne({username: req.body.username}, (err, element)=>{
        let items = element.items;
        items.push({id: req.body.id, amount: 1})
        Cart.updateOne({username: req.body.username}, {items: items}, (err, result)=>{
            if(err) throw err;
            res.json("Prodcut added to your cart!")
        })
    })
})

router.route('/isInCart').post((req, res)=>{
    Cart.findOne({username: req.body.username}, (err, element)=>{
        let result=element.items.filter(elem=>{
            return elem.id==req.body.id
        })
        res.json(result)
    })
})

router.route('/deleteProduct').post((req, res)=>{
    Cart.findOne({username: req.body.username}, (err, element)=>{
        if(err) throw err;
        let items = element.items.filter((element)=>{
            return element.id!=req.body.id
        })
        Cart.updateOne({username: req.body.username}, {items: items}, (err, result)=>{
            if(err) throw err;
            res.json("updated")
        })
    })
})

module.exports = router;