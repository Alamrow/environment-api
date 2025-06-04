const express = require("express");
const app = express();

app.get("/api/environment", (req, res) => {
    res.json({ message: "API is live!", sensorData: {} });
});

module.exports = app;  // <- Add this line to export app for Vercel
