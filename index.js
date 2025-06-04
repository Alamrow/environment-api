const express = require("express");
const app = express();

app.get("/api/environment", (req, res) => {
    res.json({ message: "API is live!", sensorData: {} });
});

app.listen(3000, () => console.log("Server running on port 3000"));
