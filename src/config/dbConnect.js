import mongoose from "mongoose";

async function connectDataBase() {

    await mongoose.connect(
        "mongodb://mongo:27017/teste"
    );

}

export default connectDataBase;

