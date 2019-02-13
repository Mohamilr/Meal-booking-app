import express from 'express'

const app = express();
const PORT = 9001;

app.get('/', (req, res) =>{
    return res.send('the app is working');
});

app.listen(PORT, () =>{
    console.log(`it is working fine  $(PORT)`);
});
