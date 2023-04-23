const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    thumbnail: { type: String },
    price: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true },
    size: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true });

  const AppartmentListing = mongoose.model('AppartmentListing',userSchema);
  module.exports = AppartmentListing;
