const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema(
  {
    nom: String,
    prix: Number,
    quantite: Number,
  },
  {
    timestamps: true,
  }
);

const Produit = mongoose.model("Produit", produitSchema);

module.exports = { Produit };