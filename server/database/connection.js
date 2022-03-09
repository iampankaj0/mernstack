const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        //mongoDB Connection String
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log(`MongoDB connected : ${con.connection.host}`)

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = connectDB