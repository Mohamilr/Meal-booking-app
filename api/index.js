import express from 'express';
import bodyParser from 'body-parser';

import mealRoute from './routes/meal.route';
import menuRoute from './routes/menu.route';
import orderRoute from './routes/orders.route';

// import MealService from './services/meal.service';
// import dummyData from './utils/dummyData';



const app = express();
const PORT = 9001;


app.use(bodyParser.json());



app.get('/', (req, res) =>{
    return res.send('the app is working');
});

//routes 
// app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/meals', mealRoute);
app.use('/api/v1/meals', menuRoute);
app.use('/api/v1/meals', orderRoute);


app.listen(PORT, () =>{
    console.log(`it is working fine on  ${PORT}`);
});