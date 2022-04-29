const express = require("express");
const produitController = require("../controllers/produit.controller");
const router = express.Router();

router.get("/", produitController.getAllProduct)
router.post("/create", produitController.createProduct)
router.put("/update/:id", produitController.updateProduct)
router.delete("/delete/:id", produitController.deleteProduct)
router.get("/find/:id", produitController.getProductById)
router.get("/search/:nom", produitController.findProductsByName)

module.exports = router;