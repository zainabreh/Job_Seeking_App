import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // mongoose.set("debug", true);

    console.log("Attempting to connect to MongoDB...");

    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.rep2s.mongodb.net/job-finding-app?retryWrites=true&w=majority`,
      {serverSelectionTimeoutMS: 50000,
        socketTimeoutMS: 45000,
        tls: true, // Ensure TLS is used
        tlsInsecure: true
       }      
    );

    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);

    // Check for specific error cases
    if (error.message.includes("TLS")) {
      console.error(
        "TLS/SSL configuration issue detected. Ensure TLS 1.2+ compatibility."
      );
    }

    if (error.message.includes("Authentication")) {
      console.error("Authentication issue. Verify DBUSER and DBPASSWORD.");
    }
  }
};
