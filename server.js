const express=require('express');
const cors=require('cors');
const ConnectDb=require('./config/db')
const path=require('path')
const ejs=require('ejs')
const AdminRoute=require('./Route/adminRoute')
const bodyParser=require('body-parser');
require('dotenv').config();



const app=express();
ConnectDb()
//CORS for Connection with React
app.use(cors());

//Body Parser for Collection of Data

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))
app.use('/uploads',express.static('uploads'))
app.set('view engine','ejs')
app.set('views','views')


//****Admin Route */
app.use(AdminRoute)
//*** dashboard route */

const port=process.env.PORT || 2500;

app.listen(port,()=>{
    console.log(`server running port http://localhost:${port}/banner/listing`);
})

