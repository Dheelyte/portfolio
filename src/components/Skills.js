import python from "../images/python.svg"
import javascript from "../images/javascript.svg"
import django from "../images/django.svg"
import react from "../images/react.svg"
import mysql from "../images/mysql.svg"
import postgresql from "../images/postgresql.svg"
import HTML from "../images/html.svg"
import CSS from "../images/css.svg"
import nginx from "../images/nginx.svg"


export default function Skills () {
    return (
        <div className="skills">
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
                    <img src={nginx} alt="" />
                    <p>Nginx</p>
                </div>
            </div>
        </div>
    )
}