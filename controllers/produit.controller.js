const { Produit } = require("../models/produit.model");
const mongoose = require("mongoose");

module.exports = {
    getAllProduct: async (req, res) => {
        const produits = await Produit.find();
        res.send(produits);
     },
    
     createProduct: async (req, res) => {
        const { nom, prix, quantite } = req.body;
        const produit = new Produit({ nom, prix, quantite });
        await produit.save();
        res.status(201).send(produit);
      },

      updateProduct: (req, res) => {
        const { id } = req.params;
        Produit.updateOne(
          { _id: id },
          { nom: req.body.nom, prix: req.body.prix, quantite: req.body.quantite },
          function (err) {
            if (err) {
              console.log("failed");
            } else {
              console.log("success update");
            }
          }
        );
        return res.send("update");
      },

      deleteProduct: async (req, res) => {
        const { id } = req.params;
        await Produit.remove({ _id: id });
        return res.send("deleted");
      },

      getProductById: async (req, res) => {
        const { id } = req.params;
        const product = await Produit.findById(id)
        res.send(product);
      },

      findProductsByName: async (req, res) => {
        const { nom } = req.params;
        const products = await Produit.find({nom: { $regex: '.*' + nom + '.*' } }).limit(5);
        res.send(products);
      },
};