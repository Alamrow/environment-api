const express = require("express");
const cors = require("cors"); // Enables front-end to fetch without issues

const app = express();
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Allows cross-origin requests

let sensorData = {};  

app.post("/api/environment", (req, res) => {
    console.log("Received Data:", req.body);  // Debugging log for Vercel logs
    sensorData = req.body;
    res.json({ message: "Data received!", sensorData });
});

app.get("/api/environment", (req, res) => {
    res.json({ message: "API is live!", sensorData });
});

module.exports = app;
