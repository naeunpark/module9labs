const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRouter');
let postRoutes = require('./routes/postRouter');
let commentRoutes = require('./routes/commentRouter');
let likeRoutes = require('./routes/likeRouter');

app.use(express.json());

app.get("/", (req, res)=>{
    res.json({message: "Welcome to my MongoDB application."});
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
});