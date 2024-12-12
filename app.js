const express=require('express');
const dotenv=require('dotenv')
const cors=require('cors')
const connectDB=require('./src/config/db')
const ExpenseRoute=require('./src/routes/ExpenseRoutes');
dotenv.config();
connectDB();


const app=express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT && !isNaN(process.env.PORT) ? process.env.PORT : 3001;
app.get('/hello',(req,res)=>{
    res.send("Hello brother")
})
app.use('/api/expenses',ExpenseRoute)
app.listen(PORT,()=>{
    console.log(`Your Application start at port number: ${PORT}`)
})