import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import App from "./App";
import clientsArray from "./assets/json/clients.json"

ReactDOM.render(<App clientsArray={clientsArray} />, document.getElementById("root"));
