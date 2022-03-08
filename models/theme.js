import mongoose from 'mongoose';

const themeSchema = new mongoose.Schema(
  {
    theme: {
      primary_color: { type: String },
      primary_color_light: { type: String },
      primary_color_dark: { type: String },
      linear_gradient: { type: String },
      text_dark: { type: String },
      text_light: { type: String },
      text_color: { type: String },
    },
    notification: {
      first: {
        type: String,
        required: true,
        trim: true,
      },
      second: {
        type: String,
        trim: true,
      },
      third: {
        type: String,
        trim: true,
      },
    },
    herobanner: {
      title: {
        type: String,
        required: [true, 'Please enter banner title'],
        trim: true,
      },
      subtitle: {
        type: String,
        trim: true,
      },
      image: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      cta: {
        text: {
          type: String,
          required: [true, 'Please enter CTA text'],
          trim: true,
        },
        link: {
          type: String,
          required: [true, 'Please enter CTA link'],
          trim: true,
        },
      },
    },
    featured_product_heading: {
      type: String,
      required: [true, 'Please enter CTA text'],
      trim: true,
    },
    categorybanner: {
      heading: {
        type: String,
        required: true,
        trim: true,
      },
      categories: [
        {
          title: {
            type: String,
            required: [true, 'Please enter banner title'],
            trim: true,
          },
          subtitle: {
            type: String,
            trim: true,
          },
          image: {
            public_id: {
              type: String,
              required: true,
            },
            url: {
              type: String,
              required: true,
            },
          },
          cta: {
            text: {
              type: String,
              required: [true, 'Please enter CTA text'],
              trim: true,
            },
            link: {
              type: String,
              required: [true, 'Please enter CTA link'],
              trim: true,
            },
          },
        },
      ],
    },
    signup: {
      bannerImage: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      heading: {
        type: String,
        required: [true, 'Please enter heading'],
        trim: true,
      },
      subheading: {
        type: String,
        required: [true, 'Please enter subheading'],
        trim: true,
      },
    },
    login: {
      bannerImage: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      heading: {
        type: String,
        required: [true, 'Please enter heading'],
        trim: true,
      },
      subheading: {
        type: String,
        required: [true, 'Please enter subheading'],
        trim: true,
      },
    },
    promotions: {
      heading: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: [true, 'Please enter promotions title'],
        trim: true,
      },
      subtitle: {
        type: String,
        trim: true,
      },
      image: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      cta: {
        text: {
          type: String,
          required: [true, 'Please enter CTA text'],
          trim: true,
        },
        link: {
          type: String,
          required: [true, 'Please enter CTA link'],
          trim: true,
        },
      },
    },
    prescription: {
      heading: {
        type: String,
        required: true,
        trim: true,
      },
      title: {
        type: String,
        required: [true, 'Please enter promotions title'],
        trim: true,
      },
      details: {
        type: String,
        trim: true,
      },
      image: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      cta: {
        text: {
          type: String,
          required: [true, 'Please enter CTA text'],
          trim: true,
        },
        link: {
          type: String,
          required: [true, 'Please enter CTA link'],
          trim: true,
        },
      },
    },
    frames: [
      {
        title: {
          type: String,
        },
        image: {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Theme || mongoose.model('Theme', themeSchema);
