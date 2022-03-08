const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const DB = 'mongodb+srv://Pankaj_crud-123:Pankaj@123@cluster0.m7rup.mongodb.net/allusers?retryWrites=true&w=majority';
const mongoose = require('mongoose');

const app = express();


dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080


//log request
app.use(morgan('tiny'));


// mongodb connection
// connectDB();
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindModify: false
}).then(() => {
    console.log('Connection Successful');
}).catch(() => console.log('No Connection'));


//parse request to body-parse
app.use(bodyparser.urlencoded({ extended: true }))


//Set View Engine
app.set("view engine", "ejs")
// app.set("views",path.resolve(__dirname,"assets/ejs"))



// load asset
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/img", express.static(path.resolve(__dirname, "assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))




// Load Routers
app.use('/', require('./server/routes/router'))




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});