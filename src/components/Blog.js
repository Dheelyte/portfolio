import img from "../images/header-img.jpg"

export default function Blog () {
    return (
        <div className="blog">
            <h1 className="title">My Blog</h1>
            <div className="container">
                <article>
                    <div className="img">
                        <img src={img} />
                    </div>
                    <h1>Article TItle</h1>
                    <p>Article descriptions</p>
                    <a href="">Read more...</a>
                </article>
                <article>
                    <div className="img">
                        <img src={img} />
                    </div>
                    <h1>Article TItle</h1>
                    <p>Article descriptions</p>
                    <a href="">Read more...</a>
                </article>
                <article>
                    <div className="img">
                        <img src={img} />
                    </div>
                    <h1>Article TItle</h1>
                    <p>Article descriptions</p>
                    <a href="">Read more...</a>
                </article>
                <article>
                    <div className="img">
                        <img src={img} />
                    </div>
                    <h1>Article TItle</h1>
                    <p>Article descriptions</p>
                    <a href="">Read more...</a>
                </article>
            </div>
        </div>
    )
}