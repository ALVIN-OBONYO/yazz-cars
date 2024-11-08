import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

 
app.post("/api/products", async (req, res) => {
  const product = req.body; // user will send data

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success:false, message: "Please provide all fields"});
  } 
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({success: true, data: newProduct});
  } catch (error) {
    console.erroe("Error in Create product:", error.message);

  }
  
});

 // console.log(process.env.MONGO_URL);
app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 ");
  
});

//password npB4RE7NO6JGx91g







// import express from 'express';
// import dotenv from "dotenv";
// import { connectDB } from './config/db.js';

// dotenv.config();

// const app = express();



// app.get("/", (req,res) => {});

// console.log(process.env.MONGO_URI);



// app.listen(5000, () => {
//   connectDB();
//   console.log('Server started at http://localhost:5000');
  
// });


