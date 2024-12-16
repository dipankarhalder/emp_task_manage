import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connection_string = process.env.APP_MONGO_URI;
    const connect = await mongoose.connect(connection_string);
    console.log(`DB Environment - ${connect.connection.host}, DB Name - ${connect.connection.name}.`);
  } catch (err) {
    console.log(`DB connection failed.`);
    process.exit(1);
  }
};
