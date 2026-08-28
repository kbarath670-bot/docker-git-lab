const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {

    res.json({
        application: "ABC Employee Portal",
        version: "1.0",
        environment: "Development",
        status: "Running"
    });

});

app.listen(PORT, "0.0.0.0", () => {

    console.log(`Server running on port ${PORT}`);

});