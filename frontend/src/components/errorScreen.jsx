import React from "react";

export default function ErrorScreen(props) {
    return (
        <div className="main-content error-screen">
            <div>
                <span>{props.city}</span>
            </div>
            <div>
                <p>No such city exists in our database</p>
            </div>
        </div>
    )
}