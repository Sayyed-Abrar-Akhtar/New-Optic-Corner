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
    featured_image: {
      type: String,
      default:
        'https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1658923247/new-optic-corner-abdul/products/vacation-glasses-optical-protection-sun_mtkiyu.jpg',
    },
    discount: {
      type: Number,
      default: 0,
    },
    featured_price: {
      type: Number,
      default: 0,
    },
    product_type: {
      type: String,
      required: [true, 'Please enter variant color.'],
      default: 'sunglasses',
    },
    variant: [
      {
        color: {
          type: String,
          required: [true, 'Please enter variant color.'],
        },
        code: {
          type: String,
          default: '#000000',
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
