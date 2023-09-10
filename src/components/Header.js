import { useState } from 'react';
import headerImg from "../images/header-img.jpg"

export default function Header () {

    const [showSideNav, setShowSideNav] = useState(false)

    function toggle () {
        setShowSideNav(!showSideNav)
    }

    return (
        <>
        <header>
            <div className="brand-name">
                <img src={headerImg} className="header-img" alt="img" />
                <h1>Delight</h1>
            </div>
            <div className="brank-links">
                <ul>
                    <li>
                        <a href="c">Contact</a>
                    </li>
                    <li>
                        <a href="d">About</a>
                    </li>
                    <li>
                        <a href="r" className="active">Resume</a>
                    </li>
                    <li>
                        <a href="f">Projects</a>
                    </li>
                    <li>
                        <a href="s">Blog</a>
                    </li>
                </ul>
                <span onClick={toggle} className="menu-bar">&#8801;</span>
            </div>
        </header>

        {
            showSideNav &&
            <nav className="nav">
            <span onClick={toggle} className="close">&#10006;</span>
            <ul>
                <a href="index.html">Contact</a>
                <a href="#features">About</a>
                <a className="hover" href="#pricing">Resume</a>
                <a href="#faq">Projects</a>
                <a href="#reviews">Blog</a>
            </ul>
        </nav>}
        </>
    )
}