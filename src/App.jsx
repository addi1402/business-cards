import React from "react";
import "./style.css";
import CardOne from "./components/CardOne";

export default function App(){
    return(
        <div className="container">
            <CardOne/>
            <CardOne/>
        </div>
    );
}