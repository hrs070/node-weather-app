import React, { useState } from "react";
import Header from "./header.jsx";
import MainContent from "./mainContent.jsx";
import Footer from "./footer.jsx";
import Loader from "./loader.jsx";
import ErrorScreen from "./errorScreen.jsx";

export default function App() {

    const [input, setInput] = useState("Lucknow");

    const [displayDelay, setDisplayDelay] = useState(true);
    const [cityError, setCityError] = useState(false);
    const [cityErrorName, setCityErrorName] = useState("");
    const [fahrenheit, setFahrenheit] = useState(false);

    const [icon, setIcon] = useState("");
    const [condition, setCondition] = useState("");
    const [temp, setTemp] = useState("");
    const [highTemp, setHighTemp] = useState("");
    const [lowTemp, setLowTemp] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [humidity, setHumidity] = useState("");
    const [pressure, setPressure] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");

    window.addEventListener("load", () => {
        handleSearchClick();
    })


    function returnCelcius(fahrenheit) {
        return ((fahrenheit - 32) * 5 / 9);
    }
    function returnFahrenheit(celcius) {
        return ((celcius * 9 / 5) + 32)
    }
    function handleUnit() {
        const btnC = document.querySelector(".btn-unit-c");
        const btnF = document.querySelector(".btn-unit-f");

        btnC.classList.toggle("btn-unit-text");
        btnF.classList.toggle("btn-unit-text");

        if (fahrenheit) {
            setFahrenheit(false);

            setTemp((prevtemp) => {
                return `${returnCelcius(prevtemp)}`;
            })
            setHighTemp((prevtemp) => {
                return `${returnCelcius(prevtemp)}`;
            })
            setLowTemp((prevtemp) => {
                return `${returnCelcius(prevtemp)}`;
            })
            setFeelsLike((prevtemp) => {
                return `${returnCelcius(prevtemp)}`;
            })

        } else if (!fahrenheit) {
            setFahrenheit(true);

            setTemp((prevtemp) => {
                return `${returnFahrenheit(prevtemp)}`;
            })
            setHighTemp((prevtemp) => {
                return `${returnFahrenheit(prevtemp)}`;
            })
            setLowTemp((prevtemp) => {
                return `${returnFahrenheit(prevtemp)}`;
            })
            setFeelsLike((prevtemp) => {
                return `${returnFahrenheit(prevtemp)}`;
            })
        }
    }

    function handleSearchChange(e) {
        let search = e.target.value;
        setInput(search);

    }

    function handleEnter(e) {
        if (e.key === "Enter") {
            handleSearchClick();
        }
        return
    }

    function handleSearchClick(e) {
        setCityErrorName(input);
        if (!input) return
        async function fetchWeather() {
            try {
                setDisplayDelay(true)

                const url = `http://localhost:5000/forecasts/${input}`;
                const response = await fetch(url);
                const data = await response.json();

                setDisplayDelay(false);

                if (data.cod === "404") {
                    console.log(`${input}: City Not Found`);
                    setCityError(true);

                } else {
                    let temp = Math.round(data.main.temp);
                    let highTemp = Math.round(data.main.temp_max);
                    let lowTemp = Math.round(data.main.temp_min);
                    let feelsLike = Math.round(data.main.feels_like);

                    const sunriseTime = new Date(data.sys.sunrise * 1000);
                    const sunrise = sunriseTime.toLocaleTimeString();
                    const sunsetTime = new Date(data.sys.sunset * 1000);
                    const sunset = sunsetTime.toLocaleTimeString();

                    setCityError(false);

                    setIcon(data.weather[0].icon);
                    setCondition(data.weather[0].main);
                    setCity(`${data.name},`);
                    setCountry(data.sys.country);
                    setHumidity(`${data.main.humidity}%`);
                    setPressure(`${data.main.pressure} hPa`);
                    setWindSpeed(`${data.wind.speed}m/s`);
                    setSunrise(sunrise);
                    setSunset(sunset);

                    if (!fahrenheit) {
                        setTemp(`${temp}`);
                        setHighTemp(`${highTemp}`);
                        setLowTemp(`${lowTemp}`);
                        setFeelsLike(`${feelsLike}`);
                    } else if (fahrenheit) {
                        setTemp(() => {
                            return `${returnFahrenheit(temp)}`;
                        })
                        setHighTemp(() => {
                            return `${returnFahrenheit(highTemp)}`;
                        })
                        setLowTemp(() => {
                            return `${returnFahrenheit(lowTemp)}`;
                        })
                        setFeelsLike(() => {
                            return `${returnFahrenheit(feelsLike)}`;
                        })
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchWeather();
        setInput("");
    }


    return (
        <div className="container">
            <Header value={input} onChange={handleSearchChange} onKeyDown={handleEnter} btnSearch={handleSearchClick} btnChangeUnit={handleUnit} />

            {displayDelay ? <Loader />
                : cityError ? <ErrorScreen city={cityErrorName} />
                    : <MainContent icon={icon} condition={condition} temp={temp} highTemp={highTemp} lowTemp={lowTemp} city={city} countryCode={country} feelsLike={feelsLike} humidity={humidity} pressure={pressure} windSpeed={windSpeed} sunrise={sunrise} sunset={sunset} />
            }

            <Footer />
        </div>
    )
}