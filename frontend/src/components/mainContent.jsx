import React from "react";

export default function MainContent(props) {
    const imgSrc = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

    return (
        <div className="main-content">

            <div className="top-display">
                <div className="icon-div">
                    <img alt="weather-icon" src={imgSrc}></img>
                    <p>{props.condition}</p>
                </div>
                <div className="temp-div">
                    <h1>{props.temp}°</h1>
                    <div className="high-low">
                        <p>High: <span>{props.highTemp}°</span></p>
                        <p>Low: <span>{props.lowTemp}°</span></p>
                    </div>
                </div>
                <div className="city-div">
                    <p>{props.city} <span>{props.countryCode}</span></p>
                </div>
            </div>

            <div className="additional-container">
                <div className="additional-data">
                    <div className="line">
                        <p>Feels Like <span>{props.feelsLike}°</span></p>
                        <p>Humidity <span>{props.humidity}</span></p>
                        <p>Pressure <span>{props.pressure}</span></p>
                    </div>
                    <div className="line">
                        <p>Wind Speed <span>{props.windSpeed}</span></p>
                        <p>Sunrise <span>{props.sunrise}</span></p>
                        <p>Sunset <span>{props.sunset}</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}