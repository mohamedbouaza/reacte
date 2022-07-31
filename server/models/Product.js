const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    designation: { type: String, required: true },
    reference: { type: String, required: true, unique: true },
    categorie: { type: Array },
    quantite: { type: Number, required: true },
    prix_achat: { type: Number, required: true },
    prix_vente: { type: Number, required: true },
    // inStock:(type:Boolean,default:true),

  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
