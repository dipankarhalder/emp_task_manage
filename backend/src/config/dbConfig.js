import mongoose from "mongoose";
import { databaseMsg } from "../constant/index.js";

export const dbConnect = async () => {
  try {
    const connectionString = process.env.APP_MONGO_URI;

    /* Ensure the connection string exists */
    if (!connectionString) {
      throw new Error(databaseMsg.missedDBlink);
    }

    /*  Attempt to connect to the MongoDB database */
    const connect = await mongoose.connect(connectionString);
    console.log(
      `=>  DB Environment - ${connect.connection.host}, DB Name - ${connect.connection.name}.`
    );
  } catch (err) {
    /* Exit process if DB connection fails */
    console.log(`${databaseMsg.failedDb} ${err.message}`);
    process.exit(1);
  }
};
