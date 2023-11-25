const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/", (req, res) => {
    res.send("Hello ERP")
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));