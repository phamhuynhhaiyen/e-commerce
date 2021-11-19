const express = require("express");
const app = express();

const cors = require("cors");

app.use(
    cors({
        origin: "*",
    })
)

const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

dotenv.config();

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connection Succesful")).catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 5000, () =>{
    console.log("Backend server is running!")
})