const express = require("express");
const app = express();
const router = require('./routes');

app.use(express.json());
app.get("/", (req, res)=>{
    res.send("Welcome to Exercise4")
})

app.use("/api/fruits", router);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})