import useSlide from "./useSlide";
import python from "../images/python.svg"
import javascript from "../images/javascript.svg"
import django from "../images/django.svg"
import react from "../images/react.svg"
import mysql from "../images/mysql.svg"
import postgresql from "../images/postgresql.svg"
import HTML from "../images/html.svg"
import CSS from "../images/css.svg"
import docker from "../images/docker.svg"
import aws from "../images/aws.svg"


export default function Skills () {

    const [ containerRef ] = useSlide()

    return (
        <div ref={containerRef} className="slide skills" id="skills">
            <h1>Skills & Technologies</h1>
            <div className="container">
                <div className="skill">
                    <img src={python} alt="" />
                    <p>Python</p>
                </div>
                <div className="skill">
                    <img src={javascript} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <img src={django} alt="" />
                    <p>Django</p>
                </div>
                <div className="skill">
                    <img src={react} alt="" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={HTML} alt="" />
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src={CSS} alt="" />
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img src={postgresql} alt="" />
                    <p>PostgreSQL</p>
                </div>
                <div className="skill">
                    <img src={mysql} alt="" />
                    <p>MySQL</p>
                </div>
                <div className="skill">
                    <img src={docker} alt="" />
                    <p>Docker</p>
                </div>
                <div className="skill">
                    <img src={aws} alt="" />
                    <p>AWS</p>
                </div>
            </div>
        </div>
    )
}