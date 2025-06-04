const express = require("express");
const app = express();

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  // <-- Ensures form data is handled properly

let sensorData = {};  

app.post("/api/environment", (req, res) => {
    console.log("Received Data:", req.body);  // <-- Debugging output for Vercel logs
    sensorData = req.body;
    res.json({ message: "Data received!", sensorData });
});

app.get("/api/environment", (req, res) => {
    res.json({ message: "API is live!", sensorData });
});

module.exports = app;
