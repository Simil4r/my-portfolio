const router = require('express').Router();
let Element = require('../models/element.model');

router.route('/').get((req, res) => {
    User.find()
        .then(elements => res.json(elements))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=>{
    const element = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        username: req.body.username,
        done: false
    }
    const newElement = new Element(element);
    newElement.save()
        .then(()=>res.json("Element added!"))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/select').post((req, res)=>{
    Element.find({username: req.body.username, date: req.body.date}, (err, elements)=>{
        if(err) throw err;
        res.json(elements);
    })
})

router.route('/check').post((req, res)=>{
    Element.updateOne({_id: req.body.id}, {done: req.body.done}, (err, result)=>{
        if(err) throw err;
    })
})

router.route('/update').post((req, res)=>{
    Element.updateOne({_id: req.body.id},{
        title: req.body.title,
        description: req.body.description,
        date: req.body.date}, (err, result)=>{
            if(err) throw err;
            res.json("Element edited!")
        })
})

router.route('/delete').post((req, res) => {
    Element.deleteOne({_id: req.body.id})
        .then(()=>res.json("Element deleted"))
})

module.exports = router;