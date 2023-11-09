import useSlide from "./useSlide";
import reelchat from "../images/reelchat.PNG"
import radarlens from "../images/radarlens.PNG"
import tourify from "../images/tourify.PNG"
import hacktoberfest from "../images/hacktoberfest.png"
import linkify from "../images/linkify.PNG"
import qrgenx from "../images/qr-genx.PNG"
import hbnb from "../images/hbnb.PNG"
import drone from "../images/drone.jpg"

export default function Projects () {

    const [ containerRef ] = useSlide()

    return (
        <div ref={containerRef} className="slide projects" id="projects">
            <h1>My Projects</h1>
            <div className="project">
                <img src={reelchat} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">ReelChat</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django Channels</span>
                        <span>JavaScript</span>
                        <span>React.js</span>
                        <span>PostgreSQL</span>
                    </div>
                    <p className="project-meta-description">
                        ReelChat is a real-time instant messaging application with end-to-end encryption.
                        This application enables you to chat with friends and families.
                        Features implemented include authentication, real-time messaging, real-time notifications,
                        real-time searching, etc.
                    </p>
                    <a class="link" href="https://reelchat.me/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>    
                    </a>
                    <a class="link" href="https://github.com/Dheelyte/RealChat" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className="project row-reverse">
                <img src={radarlens} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">Radarlens</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                    </div>
                    <p className="project-meta-description">
                        Radarlens is a location-based e-commerce web app built for small businesses.
                        Business owners can create a Business Profile and sell their products to people closest to them.
                        Radarlens helps small businesses gain visibility by showcasing their businesses
                        and products to people closest to them.
                    </p>
                    <a class="link" href="https://radarlens.onrender.com/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>    
                    </a>
                    <a class="link" href="https://github.com/Dheelyte/radarlens" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className="project">
                <img src={tourify} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">Tourify</h1>
                    <div className="stack">
                        <span>React.js</span>
                        <span>Python</span>
                        <span>Django</span>
                    </div>
                    <p className="project-meta-description">
                        Explore your favourite places with Tourify. Tourify is a web application that suggests
                        popular points of interest around you. It also shows you details and pictures of these places.
                        It's like your personal online tour guide.
                    </p>
                    <a class="link" href="https://tourify-nbzf.onrender.com/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>    
                    </a>
                    <a class="link" href="https://github.com/Dheelyte/tourify" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className="project row-reverse">
                <img src={hacktoberfest} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">Open Source Leaderboard</h1>
                    <div className="stack">
                        <span>JavaScript</span>
                        <span>React.js</span>
                    </div>
                    <p className="project-meta-description">
                        During Hacktoberfest, <a href="https://github.com/Acel-01">Acel</a> and I created a Leaderboard
                        for our developer community which ranks users based on submitted and verified GitHub pull requests. Submitted pull
                        requests have to pass certain criterias before it can be accepted. I worked on the front-end of the application.
                    </p>
                    <a class="link" href="https://hacktoberfest.onrender.com/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>    
                    </a>
                    <a class="link" href="https://github.com/Dheelyte/MLSA-Leaderboard" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className="project">
                <img src={linkify} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">Linkify</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                    </div>
                    <p className="project-meta-description">
                        Generate customized short links for free with Linkify - a simple, user-friendly URL shortening web application.
                        Experience the convenience of shorter URLs, perfect for social media, email, and more.
                    </p>
                    <a class="link" href="https://linkify-tai1.onrender.com/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>    
                    </a>
                    <a class="link" href="https://github.com/Dheelyte/linkify-url-shortener" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className="project row-reverse">
                <img src={qrgenx} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">QR GenX</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                    </div>
                    <p className="project-meta-description">
                        QR GenX is a QR code generator. You can use this tool to create QR Codes to open a website, view a PDF file, register for an event, watch Youtube videos, and much more.
                    </p>
                    <a class="link" href="https://qr-genx.onrender.com/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>    
                    </a>
                    <a class="link" href="https://github.com/Dheelyte/qr-code-generator" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className="project">
                <img src={hbnb} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">HBnB</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Flask</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                    </div>
                    <p className="project-meta-description">
                        HBnB is a full-featured AirBnb clone. In the application, users can create and view listings.
                        This project also features an interactive console I made for interacting with the application.
                    </p>
                    <a class="link" href="https://github.com/Dheelyte/AirBnB_clone_v3" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>    
                    </a>
                    <a class="link" href="https://github.com/Dheelyte/AirBnB_clone_v3" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <div className="project row-reverse">
                <img src={drone} alt="title" />
                <div className="project-meta">
                    <h1 className="project-meta-title">Drone Control App</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Tkinter</span>
                    </div>
                    <p className="project-meta-description">
                    Drone Control App is a cross-platform application for connecting to and controlling a Tello Drone in real-time.
                    I also implemented real-time surveillance feed right in the application.
                    This project was my attempt at building a Desktop application with Python. 
                    </p>
                    <a class="link" href="https://github.com/Dheelyte/drone-control-app" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
            </div>
            <a class="link" href="https://github.com/Dheelyte" className="projects-more" target="_blank" rel="noreferrer">See more</a>
        </div>
    )
}