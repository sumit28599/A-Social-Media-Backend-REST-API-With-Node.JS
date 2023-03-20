import express from "express";
//qsDSK9IW8OFDSPBW

import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const app = express();

app.use(express.json());
app.use("/api/user", router);   // http://localhost:5000/api/user/login
app.use("/api/blog", blogRouter);  // http://localhost:5000/api/blog/login
mongoose.connect(
    "mongodb+srv://Sumit_jaisval:qsDSK9IW8OFDSPBW@cluster0.amtxnep.mongodb.net/SocialMediaApp?retryWrites=true&w=majority"
)

    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected To Database Localhost 5000")
    )
    .catch((err) => console.log(err));



