require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")
var document = require('html-element').document;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


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

    
const items = {
    
    Fresh : {
        small: 700,
        medium: 950,
        large: 1500,
        jumbo: 2000
    },

    dried : {
        small: 750,
        medium: 1000,
        large: 1550,
        jumbo: 2000
    },

    peppered : {
        small: 825,
        medium: 1200,
        large: 1800,
        jumbo: 2400
    }
}
        let item = "";
        const option = req.body.snail;
        const input = req.body.qty
        const delivery = 1500;
        let hd1 = _.capitalize(req.params.order);
        
        if (option == "small") {    
         if (hd1 == "Fresh") {
                item = items.Fresh.small;
            } else if ( hd1 == "Dried") {
                item =  items.dried.small;        
        }   else if (hd1 == "Peppered") {
                item =  items.peppered.small;
        }
     
        } else if (option == "medium") {    
            if (hd1 == "Fresh") {
                item =  items.Fresh.medium;
            } else if ( hd1 == "Dried") {
                item = items.dried.medium;        
        }   else if (hd1 == "Peppered") {
                item =  items.peppered.medium;
        }        
            
        } else if (option == "large"){     
            if (hd1 == "Fresh") {
                item =  items.Fresh.large;
            } else if ( hd1 == "Dried") {
                item =  items.dried.large;        
        }   else if (hd1 == "Peppered") {
                item =  items.peppered.large;
        }
    
        } else {    
            if (hd1 == "Fresh") {
                item =  items.Fresh.jumbo;
            } else if ( hd1 == "Dried") {
                item =  items.dried.jumbo;        
        }   else if (hd1 == "Peppered") {
                item =  items.peppered.jumbo;
        }
        }


        const total = (item * input) + delivery;

    const add = req.body;
    const title = req.params.order
    const customer = {
        product: title + " snails",
        fname: add.fname,
        lname:add.lname,
        phone: add.phone,
        email: add.email,
        variant: add.snail,
        delivery: delivery,
        price: item,
        quantity: add.qty,
        total: total
    }

    console.log(customer);
    // console.log(dom);

    // console.log(price);


    res.redirect("/menu/" + title);
})




app.listen(3000, () =>  console.log("server started")
)