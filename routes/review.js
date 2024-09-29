const express = require("express");
const router = express.Router({mergeParams:true}); // to get id of reviewd place
const WrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// review validator
const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
}

// reviews post route
router.post("/",validateReview,isLoggedIn, WrapAsync(reviewController.createReview));

// deleting a review route
router.delete("/:reviewId",isReviewAuthor,WrapAsync(reviewController.destroyReview));

module.exports = router;