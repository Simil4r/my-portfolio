const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});
let Product = require('../models/product.model');


router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', upload.single('imageLeader'),(req, res)=>{
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageLeader: req.file.path,
        category: req.body.category,
        recommended: req.body.recommended
    })
    product.save()
        .then(()=>res.json("Product added!"))
        .catch(err=>res.status(400).json('Error: '+err));
})

router.route('/find').post((req, res)=>{
    Product.find({category: req.body.name}, (err, elements)=>{
        res.json(elements)
    })
})
router.route('/findRecommended').post((req, res)=>{
    Product.find({recommended: true}, (err, elements)=>{
        res.json(elements)
    })
})

router.route('/findOneByID').post((req, res)=>{
    Product.findById(req.body.id, (err, element)=>{
        if(err) throw err
        res.json(element)
    })
})

//module.exports = router;