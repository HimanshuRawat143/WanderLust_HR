const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner} = require("../middleware.js");
const { isValidObjectId } = require("mongoose");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


const controllerRoute = require("../controllers/listing.js");

const validateSchema = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
}

// now we are going to use router.route to combine common routes
router
    // common route
    .route("/",controllerRoute.listings)
    // index route
    .get(controllerRoute.listings)
    // create route
    .post(isLoggedIn,upload.single("listing[Image]"),validateSchema,WrapAsync(controllerRoute.createRoute));

// new route
router.get("/new",isLoggedIn,controllerRoute.newRoute);

router.route("/:id")
// show route
.get(WrapAsync(controllerRoute.showRoute))
// update route
.put(isLoggedIn,isOwner,upload.single("listing[Image]"),validateSchema,WrapAsync(controllerRoute.updateRoute))
// delete route
.delete(isLoggedIn,WrapAsync(controllerRoute.destroy));


// edit route
router.get("/:id/edit",isLoggedIn,isOwner,WrapAsync(controllerRoute.editRoute));


module.exports = router;
