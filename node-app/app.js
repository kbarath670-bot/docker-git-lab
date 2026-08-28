const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {

    res.json({
        application: "ABK Employee Portal",
        version: "2.0",
        environment: "Production",
        status: "Running"
    });

});

app.listen(PORT, "0.0.0.0", () => {

    console.log(`Server running on port ${PORT}`);

});