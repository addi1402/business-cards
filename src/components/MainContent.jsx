import React from "react";
import "../stylesheets/CardTwo.css";
import "../stylesheets/MainContent.css";

export default function MainContent(){
    return(
        <div className="content">
            <main className="main">
            <h1 className="name">Laura Jones</h1>
            <p className="profession">Front-End Developer</p>
            <a href="" className="mail">laurajones@gmail.com</a>
        </main>
        <div className="details">
            <h1 className="title">About Me</h1>
            <p className="info">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h1 className="title">Interests</h1>
            <p className="info">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        </div>
    );
}