require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")
var document = require('html-element').document;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

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
// point to the template folder




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
                
        function err(error) {

      if(input <= 0){
            res.send(error)
        }
       } 
       err();
       
        function prices() {
        
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
        }; 

    prices()


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

    


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'gmail',
    user: 'rahmansanuth@gmail.com',
    pass: 'odywdhvcxtgkyrjl'
  }
});

const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))


var mailOptions = {
  from: 'rahmansanuth@gmail.com',
  to: customer.email,
  subject: 'NEW ORDER AVAILABLE',
  template: "email",
  context: {
    product: customer.product,
    name: customer.fname + customer.lname,
    phone: customer.phone,
    email: customer.email,
    variant: customer.variant,
    delivery: customer.delivery,
    item: customer.price,
    qty: customer.quantity,
    total: customer.total
  },

  attachments: [{ filename: "logoR.png", path: "./attachments/logoR.png" }],

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

    res.redirect("/menu/" + title);
})

app.get(("/ma"), function (req, res) {
    res.sendFile( __dirname + "/mai.ejs")
})



app.listen(3000, () =>  console.log("server started")
)