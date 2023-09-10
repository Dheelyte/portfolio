import React, { useState, useEffect } from 'react';
import ReactTyped from "react-typed";
import GitHubSVG from "../images/github.svg"
import LinkedInVG from "../images/linkedin.svg"
import TwitterSVG from "../images/twitter.svg"
 

export default function Hero () {
    return (
        <div className="hero">
            <div className="container">
                <p className='intro'>Hi, my name is</p>
                <div className="name">
                    <h1>Delight </h1>
                    <h1> Olu-Olagbuji</h1>
                </div>
                <div className='typing'>
                    <span>
                    I'm a{" "}
                    <ReactTyped
                    strings={["Software Engineer", "Web Developer", "Technical Writer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                    />
                    </span>
                </div>

                <div className="cta-social">
                    <a href='mailto:olagbujidelight@gmail.com' className="cta">Contact Me</a>
                    <div className="social">
                        <a href='https://github.com/Dheelyte'><img src={GitHubSVG} alt='github' /></a>
                        <a href='https://www.linkedin.com/in/delight-olagbuji' all='inkedin'><img src={LinkedInVG} /></a>
                        <a href='https://twitter.com/DelightGbolahan' alt='Twitter'><img src={TwitterSVG} /></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}