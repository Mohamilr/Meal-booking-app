const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = require('./routes/index');

// import MealService from './services/meal.service';
// import dummyData from './utils/dummyData';



const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) =>{
    return res.send('the app is working');
});

//routes 
app.use('/api/v1/', router);

app.use('*', (req, res) => {
    return res.status(404).json({
        status: 'error',
        message: 'wrong route'
    })
})

module.exports = app;