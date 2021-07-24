const express = require("express");
const fetch = require("node-fetch");

let router = express.Router();

router.get("/:locationName", (req, res) => {
    const locationName = req.params.locationName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=6ba1413d418177ef29f0a40edbc6c6f2&units=metric`;


    async function getWeather() {
        try {
            const response = await fetch(url, { mode: "cors" });
            const data = await response.json();

            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send(data);
        } catch (err) {
            console.log(`Error: ${err}`)
        }

    }
    getWeather();


})


module.exports = router;