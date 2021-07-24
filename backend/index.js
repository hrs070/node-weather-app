const express = require('express');
const path = require("path");
const router = require('./router');

const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/forecasts/", router);

app.get("/", (req, res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString() });
    console.log("received request");
})

app.listen(port, () => {
    console.log(`Server listening at PORT: ${port}`);
})