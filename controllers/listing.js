const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
let MY_ACCESS_TOKEN = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: MY_ACCESS_TOKEN });

module.exports.createRoute = async (req,res,next)=>{
    // one way is: let {title,description,image,price,country,location} = req.body;
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
    .send()
    
    let url = req.file.path;
    let filename = req.file.filename;
    const new_list = new Listing(req.body.listing);
    new_list.Owner = req.user._id;
    new_list.Image = {url,filename};
    new_list.geometry = response.body.features[0].geometry;
    let savedListing = await new_list.save();
    console.log(savedListing);
    req.flash("success","New listing Created Successfully !");
    res.redirect("/listings");
};

module.exports.editRoute = async (req,res,next)=>{
    const { id } = req.params;
    const record = await Listing.findById(id);
    if(!record){
        req.flash("error","Listing you requested for does not exist !");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { record });
};

module.exports.newRoute = (req,res)=>{
    res.render("./listings/new.ejs");
};

module.exports.showRoute = async (req,res,next)=>{
    let {id} = req.params;
    const record = await Listing.findById(id).populate({path: "reviews", populate: {path:"author"},}).populate("Owner");
    if(!record){
        req.flash("error","Listing you requested for does not exist !");
        res.redirect("/listings");
    }
    console.log(record);
    res.render("./listings/show.ejs",{record});
};

module.exports.updateRoute = async (req,res,next)=>{
    let {id} = req.params;
    const deltee = await Listing.findByIdAndUpdate(id,{...req.body.listing}); //{...req.body.listing} -> deconstruction
    
    if(typeof req.file!="undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        deltee.Image = {url,filename};
        await deltee.save();
    }
    

    req.flash("success","Listing updated Successfuly !");
    res.redirect(`/listings/${id}`);
};

module.exports.destroy = async (req,res,next)=>{
    let {id} = req.params;   
    let ll = await Listing.findByIdAndDelete(id);
    console.log(ll);
    req.flash("success","Listing deleted Successfuly !");
    res.redirect("/listings");
};

module.exports.listings = async (req,res)=>{
    const allListings =  await Listing.find({});
    res.render("listings/index.ejs",{allListings});
};


