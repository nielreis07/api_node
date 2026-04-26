import mongoose from "mongoose";

let isConnected = false;

async function connectDataBase() {
    if (isConnected) {
        return mongoose.connection;
    }

    await mongoose.connect("mongodb://mongo:27017/devdb");
    isConnected = true;

    return mongoose.connection;
}

export default connectDataBase;
