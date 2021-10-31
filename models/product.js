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
        images: [
          {
            public_id: {
              type: String,
              required: true,
            },
            url: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    category: {
      type: String,
      required: true,
      enum: {
        values: ['men', 'women', 'kid', 'unisex'],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);
