import mongoose from "mongoose";

const DB_URL = "mongodb://localhost:27017/post";

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error in database connection");
        console.log(error.message);
        process.exit();
    }
};

export default dbConnection;
