import React from 'react';
import ReactTyped from "react-typed";
 

export default function Hero () {

    const scroll = (elem) => {
        console.log(elem)
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero">
            <div className="container">
                <p className='intro'>Hi, my name is</p>
                <div className="name">
                    <h1>Delight</h1>
                    <h1>Olu-Olagbuji</h1>
                </div>
                <div className='typing'>
                    <span>
                    I'm a{" "}
                    <ReactTyped
                    strings={["Software Engineer", "Technical Writer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                    />
                    </span>
                </div>

                <div className="cta-social">
                    <span onClick={()=>{scroll('contact')}} className="cta">Contact Me</span>
                    
                </div>
                
            </div>
        </div>
    )
}