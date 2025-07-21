import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';


import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';

dotenv.config(); // ✅ Should be before any usage of process.env
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});


app.use(
  cors({
    origin: ["http://localhost:5173", "https://mern-jwtauth.vercel.app/"],
    credentials: true,
  })
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ Fixed here

app.use('/api/auth', authRoutes);

console.log(process.env.MONGO_URI)


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));
