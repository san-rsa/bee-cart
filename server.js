require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// mongoose.connect(process.env.DB, {useNewUrlparser: true});

// const orderSchema  = {
//   "First name": String,
//   "Second name": String,
//   "Phone number": Number,
//   "Quantity": Number,
//   "Total amount": { Delivery: Number, order: Number, total: Number}
// }

// const Order = mongoose.model("order", orderSchema)


app.get("/", (req, res ) => {
    res.render("index");
});


app.get("/contact", (req, res ) => {
    res.render("contact");
});


app.get("/menu", (req, res ) => {
    res.render("category");
});

app.route("/menu/:order")


.get((req, res ) => {
    let h1 = req.params.order;

    let h1T = _.capitalize(h1);

    res.render("order",  {
        title: h1T
    });
})

.post((req, res) => {

})




app.listen(3000, () =>  console.log("server started")
)