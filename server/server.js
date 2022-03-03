const express = require('express');
const cors = require('cors');

const animalRouter = require('./routers/animals-route');
const port =process.env.PORT || 8000
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));


app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
    
});
app.use('/',(req,res)=>{
    res.send("home page")
})
app.use('/animals' , animalRouter)