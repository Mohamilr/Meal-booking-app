const app = require('./API/src/app');


const PORT = process.env.PORT || 9001;

app.listen(PORT, () =>{
    console.log(`it is working fine on  ${PORT}`);
});