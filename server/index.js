const express=require('express');
const mongoose=require('mongoose');

const authRouter=require("./routes/auth");

const PORT= 3000;
const app = express();
const DB="mongodb+srv://anchalksai:anchal123@cluster0.sdmgrbb.mongodb.net/?retryWrites=true&w=majority";
//middle ware
app.use(express.json())
app.use(authRouter);

//connection
mongoose.connect(DB).then(()=>{
    console.log("connection successfully");
}).catch(e=>{
    console.log(e);
});

app.listen(PORT,'0.0.0.0', ()=>{
    console.log('connected at port '+PORT+' hello');
});

