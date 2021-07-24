import React from "react";
import logo from "./logo.png";

export default function Header(props) {
    return (
        <div className="header">
            <div className="logo"><img alt="logo" src={logo}></img><h1>Weatherly</h1></div>
            <div className="search">
                <input type="text" placeholder="Search city" onChange={props.onChange} value={props.value} onKeyDown={props.onKeyDown}></input>
                <button type="button" onClick={props.btnSearch}>Search</button>
            </div>
            <div className="btn-unit">
                <button type="button" onClick={props.btnChangeUnit}><span className="btn-unit-c btn-unit-text">°C</span> / <span className="btn-unit-f">°F</span></button>
            </div>
        </div>
    )
}