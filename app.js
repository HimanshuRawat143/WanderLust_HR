if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const exp = require("constants");
const method_override = require("method-override");
const ejsMate = require("ejs-mate");
const WrapAsync = require("./utils/WrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");

const listingRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.use(cookieParser());

// app.get("/home",(req,res) => {
//     res.send("Hey You are at Home !!!");
// });

app.get("/getCookies",(req,res) => {
    res.cookie("Himanshu","Rawat");
    res.cookie("Anything","Guessed");
    res.send("Krli mene cookie save !!!");
});

const dbUrl = process.env.ATLASDB_URL;
const port = process.env.PORT || 8080;

async function main(){
    await mongoose.connect(dbUrl);
}

main().then(()=>{
    console.log("Connected to DB !");
}).catch((err)=>{console.log(err)});


app.set("view-engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(method_override("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET_KEY,
    },
    touchAfter: 24*3600,
})

store.on("error", () => {
    console.log("Error in MONGO SESSION_STORE", err);
});

// creating a cookie with some options
const sessionOptions = {
    store,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true
    }
}




// activating cookie
app.use(session(sessionOptions));
app.use(flash());

// authentication and authorization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// registered demo user
// app.get("/demouser", async (req,res) => {
//     let fakeuser = new User({
//         email:"apnacollege@gmail.com",
//         username: "Himanshu_rawat",
//     });

//     let registeredUser = await User.register(fakeuser,"Mypassword");
//     res.send(registeredUser);
// })
app.get("/",async (req,res)=>{
    console.dir(req.cookies);
    const allListings =  await Listing.find({});
    res.render("listings/index.ejs",{allListings});
})
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);

// app.get("/testListing", async (req,res)=>{
//     let sampleListing = new Listing({
//         title: "My House",
//         description:"It's my all new villa where i am gonna live !",
//         Image: "https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         price:382353,
//         location: "Maharastra",
//         country: "India"
//     });

//     await sampleListing.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
//     console.log("Listing Saved !");
// });

app.all("*",(req,res,next) => {
    next(new ExpressError(404,"Page Not Found !"));
})

// Error handling middleware for listing validation 
app.use((err, req, res, next) => {
    let {statusCode=500,message="Something Went Wrong"} = err;
    res.render("error.ejs",{message});
    // res.status(statusCode).send(message);
})

app.listen(port, ()=>{
    console.log("Server is listening !");
});
