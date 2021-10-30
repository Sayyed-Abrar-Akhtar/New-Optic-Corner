import mongoose from 'mongoose';

const themeSchema = new mongoose.Schema({
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
  categorybanner: [
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
      images: {
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
  promotions: {
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
});

export default mongoose.models.Theme || mongoose.model('Theme', themeSchema);
