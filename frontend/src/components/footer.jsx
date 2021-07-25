import React from "react";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-description">
                    <p>Weather data provided by <span>Open Weather Map</span></p>
                </div>
                <div className="social">
                    <a href="https://github.com/hrs070" target="_blank" rel="noreferrer"><i class="fab fa-github-alt"></i></a>
                    <a href="https://www.linkedin.com/in/hrs070/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/hrs070" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                </div>
                <div className="copyright">
                    <p>Made by HarsH &copy; {year}</p>
                </div>
            </div>
        </div>

    )
}