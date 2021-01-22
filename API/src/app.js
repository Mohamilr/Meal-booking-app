const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config;

const mealRoute = require('./routes/meal.route');
const menuRoute = require('./routes/menu.route');
const orderRoute = require('./routes/orders.route');

// import MealService from './services/meal.service';
// import dummyData from './utils/dummyData';



const app = express();

app.use(bodyParser.json());

app.use(dotenv());

app.get('/', (req, res) =>{
    return res.send('the app is working');
});

//routes 
// app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/meals', mealRoute);
app.use('/api/v1/meals', menuRoute);
app.use('/api/v1/meals', orderRoute);

module.exports = app;