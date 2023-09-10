import img from "../images/header-img.jpg"

export default function Projects () {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="project">
                <img src={img} />
                <div className="project-meta">
                    <h1 className="project-meta-title">Project Title One</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                    </div>
                    <p className="project-meta-description">
                        Project Description Project Description Project DescriptionProject Description
                        Project DescriptionProject Description Project Description Project Description
                        Project Description Project DescriptionProject Description Project Description
                        Project DescriptionProject Description Project DescriptionProject Description
                        roject Description Project Description Project DescriptionProject Description
                        Project DescriptionProject Description Project Description Project Description
                        Project Description Project DescriptionProject Description Project Description
                        Project DescriptionProject Description 
                    </p>
                    <a href="project-link">View</a>
                </div>
            </div>
            <div className="project row-reverse">
                <img src={img} />
                <div className="project-meta">
                    <h1 className="project-meta-title">Project Title One</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                    </div>
                    <p className="project-meta-description">Project Description</p>
                    <a href="project-link">View</a>
                </div>
            </div>
            <div className="project">
                <img src={img} />
                <div className="project-meta">
                    <h1 className="project-meta-title">Project Title One</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                    </div>
                    <p className="project-meta-description">Project Description</p>
                    <a href="project-link">View</a>
                </div>
            </div>
            <div className="project row-reverse">
                <img src={img} />
                <div className="project-meta">
                    <h1 className="project-meta-title">Project Title One</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                    </div>
                    <p className="project-meta-description">Project Description</p>
                    <a href="project-link">View</a>
                </div>
            </div>
            <div className="project">
                <img src={img} />
                <div className="project-meta">
                    <h1 className="project-meta-title">Project Title One</h1>
                    <div className="stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                    </div>
                    <p className="project-meta-description">Project Description</p>
                    <a href="project-link">View</a>
                </div>
            </div>
        </div>
    )
}