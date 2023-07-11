import express from 'express';
const app = express();
import mongoose,{connect} from "mongoose";
import morgan  from'morgan';


import {router} from '../src/routes/productRoutes';

app.use(morgan("tiny"));
console.log("Morgan was enabled...");

connect('mongodb://0.0.0.0:27017/kabraTest')
.then(() => console.log("Connected too MongoDB..."))
   .catch((err) => console.error(err));

   app.use(express.json());
//    app.use(express.urlencoded({ extended: true }));

   app.use('/',router);




const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Connecting to the port ${PORT}`);
});



