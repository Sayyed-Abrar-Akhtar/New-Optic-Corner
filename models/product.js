import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter product title.'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Please enter price of the product.'],
      default: 0.0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);
