import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
        name: {
          type: String,
          required: true,
        },
        description: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          regularPrice: {
            type: Number,
            required: true,
          },
          discountPrice: {
            type: Number,
            required: true,
          },
          bathrooms: {
            type: Number,
            required: true,
          },
          bedrooms: {
            type: Number,
            required: true,
          },
          furnished: {
            type: Boolean,
            required: true,
          },
          parking: {
            type: Boolean,
            required: true,
          },
          petfriendly: {
            type: Boolean,
            required: true,
          },
          wifi: {
            type: Boolean,
            required: true,
          },
          accessibility: {
            type: Boolean,
            required: true,
          },
          boreholewatersystem: {
            type: Boolean,
            required: true,
          },
          pool: {
            type: Boolean,
            required: true,
          },
          garden: {
            type: Boolean,
            required: true,
          },
          type: {
            type: String,
            required: true,
          },
          offer: {
            type: Boolean,
            required: true,
          },
          accessCards: {
            type: Boolean,
            required: true,
          },
          communitySecurity: {
            type: Boolean,
            required: true,
          },
          cameras: {
            type: Boolean,
            required: true,
          },
          alarmSystem: {
            type: Boolean,
            required: true,
          },
          sensor: {
            type: Boolean,
            required: true,
          },
          imageUrls: {
            type: Array,
            required: true,
          },
          userRef: {
            type: String,
            required: true,
          },
        },
        { timestamps: true }
      );
      
      const Listing = mongoose.model('Listing', listingSchema);
      
      export default Listing;
