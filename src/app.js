const express = require('express');
const app = express();

// Routes imports
const routes = require('./routes/main');

// Modals imports
const Detail = require('./models/detail');
const Slider = require('./models/slider');
const Services = require('./models/service');

// Environment Varials
const dotenv = require('dotenv');
dotenv.config();

// Mongoose setup
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, () => {
  console.log('DB connected');
});

// Detail.create({
//   brandName: "Kalyan Agro Industries",
//   brandIconUrl:
//     "https://www.eatlogos.com/alphabet_logos/png/vector_brush_k_logo.png",
//   links: [
//     {
//       label: "Home",
//       url: "/",
//     },
//     {
//       label: "Products",
//       url: "/products",
//     },
//     {
//       label: "Gallery",
//       url: "/gallery",
//     },
//     {
//       label: "About",
//       url: "/about",
//     },
//     {
//       label: "Contact-us",
//       url: "/contact-us",
//     },
//   ],
// });

// Slider.create([
//   {
//     title: "Rocky Hills",
//     subTitle: "good view of some hills to enjoy",
//     imageUrl: "/static/images/img1.jpg",
//   },
//   {
//     title: "Open Plains",
//     subTitle: "good view of some open planes to enjoy",
//     imageUrl: "/static/images/img2.jpg",
//   },
//   {
//     title: "Snowy Mountains",
//     subTitle: "good view of some snowy mountains to enjoy",
//     imageUrl: "/static/images/img3.jpg",
//   },
// ]);

// Services.create(
//   {
//     icon: "fa-solid fa-hammer",
//     title: "Services",
//     description: "We provide best service",
//     link: "https://www.kalyanagroindustries/services.com",
//     linkText: "Check",
//   },
//   {
//     icon: "fa-solid fa-cube",
//     title: "Products",
//     description: "We provide durable products",
//     link: "https://www.kalyanagroindustries/products.com",
//     linkText: "View",
//   },
//   {
//     icon: "fa-solid fa-truck",
//     title: "Delivery",
//     description: "We provide fast deliveries",
//     link: "https://www.kalyanagroindustries/products.com",
//     linkText: "Shop",
//   }
// );

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// const ejs = require("ejs");

// const expHbs = require("hbs");
// const path = require("path");
// var hbs = expHbs.create({
//   extname: "hbs",
//   defaultLayout: "main",
//   layoutsDir: path.join(__dirname, "views"),
// });
// app.engine("hbs", hbs.engine);
// app.set("views", path.join(__dirname, "views"));

const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials('views/partials');

app.use('/static', express.static('public'));
app.listen(process.env.PORT, () => {
  console.log('server started http://localhost:8000');
});

app.use('/', routes);
