import useSlide from "./useSlide";

export default function About () {

   const [ containerRef ] = useSlide()

    return (
        <div ref={containerRef} className="slide about" id="about">
            <h1>About me</h1>
            <p>
                In 2017, I started my tech journey programming with
                Scratch and I haven't looked back ever since.
                Fast forward to a year later, I started learning Python from
                my Mathematics teacher in High School. Python really piqued my
                interest in programming and I found my self building simple 
                projects using Python. A year later, I learnt JavaScript.
                I also enrolled in a 12 months software engineering Programme organized by
                ALX Africa and this programme deepened my knowledge in core Software Engineering
                principles and also equipped me with problem solving skills.
            </p>
            <p>
                Over the years, I have had the opportunity to work with amazing people on
                diverse projects, and also teach programming at various bootcamps including a
                bootcamp organized by Microsoft Learners Student Ambassadors (MLSA).
            </p>
            <p>
                When I'm not writing code, I'm usually either watching a movie, writing <a className="inline-link" href='https://delighto.medium.com' target="_blank" rel="noreferrer">tech articles</a> or taking
                pictures of beautiful skies. I also speak English, French and Yoruba.
            </p>
        </div>
    )
}