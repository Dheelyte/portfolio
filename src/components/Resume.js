import useSlide from "./useSlide";

export default function Resume () {

    const [ containerRef ] = useSlide()

    return (
        <div ref={containerRef} className="slide resume" id="resume">
            <h1>My Resume</h1>
            <p>My Resume showcases my career journey and work experience</p>
            <a href="https://drive.google.com/file/d/1PFs6NgM0xtIXnIxuUYMGR4UbsEMTwg1n/view?usp=sharing" target="_blank" rel="noreferrer">See my Resume</a>
        </div>
    )
}