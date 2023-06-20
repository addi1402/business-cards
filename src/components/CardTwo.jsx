import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "../stylesheets/CardTwo.css";

export default function CardTwo(){
    return(
        <div className="card-two">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}