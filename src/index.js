import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import App from "./App";
import data from "./assets/json/data.js"
import clientsArray from "./assets/json/clients.json"

ReactDOM.render(<App data={data} clientsArray={clientsArray} />, document.getElementById("root"));
