const express = require("express");
const cors = require("cors"); // Enables front-end to fetch without issues

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Allows cross-origin requests

let sensorData = {};  

// POST endpoint for ESP32/Arduino to send data
app.post("/api/environment", (req, res) => {
    console.log("Received Data:", req.body);  // Vercel log for debugging
    sensorData = req.body;
    res.json({ message: "Data received!", sensorData });
});

// GET endpoint returns HTML with auto-refresh every 5 seconds
app.get("/api/environment", (req, res) => {
    const co2 = sensorData.co2_ppm || "No data yet";
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="refresh" content="5">
            <title>Live CO2 Monitor</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #333; }
                p { font-size: 24px; color: #007bff; }
            </style>
        </head>
        <body>
            <h1>Live CO2 Data</h1>
            <p>CO2: ${co2} PPM</p>
        </body>
        </html>
    `);
});

module.exports = app;
