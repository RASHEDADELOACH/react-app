const express = require('express');
const { getAllProducts, addProduct, getSingleProduct, updateProduct,deleteProduct } = require('../../Controllers/products.controllers');


const router = express.Router();

router.get('/',getAllProducts);
router.post('/' ,addProduct);
router.get('/:id' , getSingleProduct);
router.delete('/:id' ,deleteProduct);
router.patch('/update/:id', updateProduct);

module.exports = router;