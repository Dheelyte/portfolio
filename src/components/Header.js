import { useState } from 'react';
import headerImg from "../images/Delight-Olu-Olagbuji.jpg"

export default function Header () {

    const [showSideNav, setShowSideNav] = useState(false)

    function toggle () {
        setShowSideNav(!showSideNav)
    }

    const scroll = (elem) => {
        console.log(elem)
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <div className='header'>
            <div className="brand-name">
                <img src={headerImg} className="header-img" alt="Delight Olu-Olagbuji" />
                <h1><a href='/'>Delight</a></h1>
            </div>
            <div className="brand-links">
                <ul>
                    <li>
                        <span onClick={()=>{scroll('contact')}}>Contact</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('about')}}>About</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('resume')}} className="active">Resume</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('projects')}}>Projects</span>
                    </li>
                    <li>
                        <span onClick={()=>{scroll('blog')}}>Blog</span>
                    </li>
                </ul>
                <span onClick={toggle} className="menu-bar">&#8801;</span>
            </div>
        </div>

        {
            showSideNav &&
            <nav className="nav">
                <span onClick={toggle} className="close">&#10006;</span>
                <ul>
                    <span className='link' onClick={()=>{scroll('contact')}}>Contact</span>
                    <span className='link' onClick={()=>{scroll('about')}} >About</span>
                    <span className='link hover' onClick={()=>{scroll('resume')}}>Resume</span>
                    <span className='link' onClick={()=>{scroll('projects')}}>Projects</span>
                    <span className='link' onClick={()=>{scroll('blog')}}>Blog</span>
                </ul>
            </nav>}
        </>
    )
}