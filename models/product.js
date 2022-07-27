import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter product title.'],
      trim: true,
    },

    description: {
      type: String,
      required: [true, 'Please enter product description.'],
    },
    variant: [
      {
        color: {
          type: String,
          required: [true, 'Please enter variant color.'],
        },
        sku: {
          type: String,
          required: [true, 'Please enter variant color.'],
        },
        images: [
          {
            id: {
              type: String,
              required: true,
            },
            secure_url: {
              type: String,
              required: true,
            },
          },
        ],
        price: {
          type: Number,
          required: [true, 'Please enter price of the product.'],
          default: 0.0,
        },
        stock: {
          type: Number,
          required: [
            true,
            'Please enter number of stock available for the color.',
          ],
        },
      },
    ],
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    category: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);
