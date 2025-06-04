const express = require("express");
const app = express();

app.use(express.json()); // <-- Allows ESP8266 to send JSON data

let sensorData = {}; // <-- Stores latest ESP8266 readings

app.post("/api/environment", (req, res) => {
    sensorData = req.body;
    res.json({ message: "Data received!", sensorData });
});

app.get("/api/environment", (req, res) => {
    res.json({ message: "API is live!", sensorData });
});

module.exports = app;
