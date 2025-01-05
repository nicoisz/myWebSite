import React from "react";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="container">
        <div class="loader">
           <div data-glitch="Loading..." class="glitch">Loading...</div>
        </div>
        </div>);
    }

export default Loading;