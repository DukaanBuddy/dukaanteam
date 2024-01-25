import mongoose from "mongoose";

const inventoryItemSchema = new mongoose.Schema({
  // businessUuid: { type: String, required: true },
  itemID: String,
  itemCategory: String,
  itemName: String,
  sku: String,
  hsnNumber: String,
  brandName: String,
  subCategory: String,
  weight: Number,
  itemSize: String,
  itemQuantity: Number,

  unitQuantity: Number,
  unitSize: String,
  unitWeight: Number,
  numberOfItemsPerUnit: Number,

  salePrice: Number,
  mrpPerUnit: Number,
  totalInventoryValue: Number,
  totalInventoryVolume: Number,
  itemPicture: String,

  stockInHand: Number,
  shelfCapacity: Number,

  itemStatus: {
    type: String,
    enum: ["Damaged", "To be sold"],
  },

  netAmount: Number,
  discount: Number,
  sac: String, // Service Code
  color: String,
  size: String,
  productDescription: String,

  lastTransactionDate: Date,
  purchasePrice: Number,
  gstPercentage: Number,
  subscriptionEligible: { type: Boolean, default: false },
});

export default mongoose.model("InventoryItem", inventoryItemSchema);
