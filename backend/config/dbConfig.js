import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connectionString = process.env.APP_MONGO_URI;

    /* Ensure the connection string exists */
    if (!connectionString) {
      throw new Error('MongoDB connection string is missing in environment variables');
    }

    /*  Attempt to connect to the MongoDB database */
    const connect = await mongoose.connect(connectionString);
    console.log(`
      DB Environment - ${connect.connection.host}, 
      DB Name - ${connect.connection.name}.
    `);
  } catch (err) {
    /* Exit process if DB connection fails */
    console.log(`DB connection failed: ${err.message}`);
    process.exit(1);
  }
};
