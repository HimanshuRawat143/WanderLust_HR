const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string, required } = require("joi");

const listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:String,
    Image:{
        url: String,
        filename: String,
    },
    price:{
        type: Number,
        min: [0, 'Price must be greater than 0']
    },
    location:String,
    country:String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    Owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        }
    }
});

//if listing is delted then its reviews must be deleted
listingSchema.post("findOneAndDelete",async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;

