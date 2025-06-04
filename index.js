const express = require("express");
const app = express();

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  // <- Allows form data

let sensorData = {};  

app.post("/api/environment", (req, res) => {
    sensorData = req.body;
    res.json({ message: "Data received!", sensorData });
});

app.get("/api/environment", (req, res) => {
    res.json({ message: "API is live!", sensorData });
});

module.exports = app;
