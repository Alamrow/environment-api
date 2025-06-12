const express = require("express");
const cors = require("cors"); // Enables front-end to fetch without issues

const app = express();
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Allows cross-origin requests

let sensorData = {};  

// Function to generate dynamic default values
const generateSensorData = () => ({
    CO2: (Math.random() * (1 - 0.7) + 0.7).toFixed(2), // CO2: 0.7 ppm to 1 ppm
    humidity: (Math.random() * (45 - 36) + 36).toFixed(1), // Humidity: 36% to 45%
    temperature: (Math.random() * (30 - 26) + 26).toFixed(1), // Temp: 26°C to 30°C
    waterLevel: (Math.random() * (300 - 250) + 250).toFixed(0), // Water Level: 250mm to 300mm
    time: new Date().toISOString() // Live timestamp
});

app.post("/api/environment", (req, res) => {
    console.log("Received Data:", req.body);  // Debugging log for Vercel logs
    sensorData = req.body; // Store received sensor data
    res.json({ message: "Data received!", sensorData });
});

app.get("/api/environment", (req, res) => {
    // If no real sensor data exists, return dynamic demo values
    res.json({ message: "API is live!", sensorData: Object.keys(sensorData).length ? sensorData : generateSensorData() });
});

module.exports = app;
