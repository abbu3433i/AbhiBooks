import express from 'express' //-----this is new version first open configfile than do type module after that u can use it.
import dotenv from 'dotenv' //--
import cors from 'cors'
import { dbConnection } from './Database/dbConnection.js';

//importing routers
import bookroute from './router/bookroute.js';
import userRoute from './router/userRoute.js';

const app = express();

app.use(cors());
app.use(express.json());//----------
app.use(express.urlencoded({ extended: true }))

dotenv.config(); //--must to do config

const PORT = process.env.PORT || 4001;  //------agar dotenv nhi chale to default 4001 chala do

// app.get("/",(req,res)=>{
//     res.send('hello baccha')
// })

dbConnection();  //-----database 

//defining routes
app.use("/book",bookroute);
app.use("/user",userRoute);


app.listen(PORT,(req,res)=>{
    console.log(`server st ${PORT}`);
    
})