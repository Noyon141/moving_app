import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });
    connection.on("error", (error: any) => {
      console.log("Error while connecting to MongoDB", error);
    });
  } catch (error: any) {
    console.log("CANNOT CONNECT TO DATABASE!", error);
    process.exit(1);
  }
};
