const express = require('express');
const path = require("path");
const router = require('./router');

const app = express();
const PORT = 5000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/forecasts/", router);

app.get("/", (req, res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString() });
    console.log("received request");
})

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
})