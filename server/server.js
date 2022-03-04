require('dotenv').config();
require('./DB/ZooDb');

const express = require('express');
const cors = require('cors');
const animalRouter = require('./routers/animals-route');
const employeesRouter = require('./routers/employees-route');
const port =process.env.PORT 
const app = express();

app.use(cors());
app.use(express.json());


app.listen(port, ()=>{
    console.log(`server is up on ${port}`);
    
});

app.use('/home',(req,res)=>{
    res.send("home page")
})

app.use('/animals' , animalRouter)
app.use('/employee' , employeesRouter)
