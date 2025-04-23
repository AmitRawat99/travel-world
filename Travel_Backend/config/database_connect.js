import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function ConnectDb() {
  try {
    if (!process.env.MONGO) {
      throw new Error("MONGO is undfine is envronment variable  ");
    }
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Your Database ✅");
  } catch (error) {
    console.error("❌ Database Connection Error");
    process.exit();
  }
}

export default ConnectDb

