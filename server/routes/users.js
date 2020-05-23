const router = require('express').Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) throw err;
        const user = {
            username: req.body.username,
            password: hash
        }

        const newUser = new User(user);
        newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
});

router.route('/login').post((req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) res.json({ err: "Incorrect username or password!" })
        if(user) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (!result) res.json({ err: "Incorrect username or password!" })
                else res.json({ result: req.body.username })
            })
        }else{
            res.json({ err: "Incorrect username or password!" })
        }
    })
})

module.exports = router;