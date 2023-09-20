import useSlide from "./useSlide";

export default function Blog () {

    const [ containerRef ] = useSlide()

    return (
        <div ref={containerRef} className="slide blog" id="blog">
            <h1 className="title">My Articles</h1>
            <div className="container">
                <article>
                    <div className="img">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*JtvDNgonwDl8sRlYYW69kA.jpeg" alt="title"  />
                    </div>
                    <h1>Python Code Optimization Guide</h1>
                    <p>Code optimization involves making your code run faster and use less resources, hence increasing its performance and efficiency...
                    </p>
                    <a href="https://python.plainenglish.io/python-optimization-guide-make-your-code-run-5x-faster-d3d77fc76d7a">Read</a>
                </article>
                <article>
                    <div className="img">
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1691545623407/12490c72-1378-44da-8713-69229e29bb74.jpeg?w=340&h=170&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="title" />
                    </div>
                    <h1>Build, Test and Deploy a URL Shortener with Django</h1>
                    <p>Heard of bit.ly and tinyurl? Those are examples of URL Shorteners. Let's build our own with Python and Django.</p>
                    <a href="https://delighto.hashnode.dev/build-test-deploy-url-shortener-app-with-django">Read</a>
                </article>
                <article>
                    <div className="img">
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1691545993464/c5a04a0d-0e22-41f0-8aab-90049f877068.jpeg?w=340&h=170&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="title" />
                    </div>
                    <h1>The Beginner's Guide to Git & GitHub</h1>
                    <p>Imagine working on a project in which you aren't able to keep track of file changes, or revert to previous versions...</p>
                    <a href="https://cdn.hashnode.com/res/hashnode/image/upload/v1691545993464/c5a04a0d-0e22-41f0-8aab-90049f877068.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp">Read</a>
                </article>
                <article>
                    <div className="img">
                        <img src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/zGuBURGGmdY/upload/130ede51a665e0e48ab3b372c0541f34.jpeg?w=340&h=170&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="title" />
                    </div>
                    <h1>Understanding Python Comprehension</h1>
                    <p>A concise syntax for creating lists, dicts, and sets which enhances code readability and efficiency.</p>
                    <a href="https://python.plainenglish.io/write-better-code-with-python-comprehension-bad8376e44ee">Read</a>
                </article>
                <article>
                    <div className="img">
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1689519450960/c50ab82d-7ebd-4337-b810-3cdee64c4045.jpeg?w=340&h=170&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="title" />
                    </div>
                    <h1>Linux: Shell Navigation & Permissions</h1>
                    <p>Learn how to navigate a Linux system, work with files, directories, and understand Linux permissions.</p>
                    <a href="https://delighto.hashnode.dev/introduction-to-linux-shell-navigation-permissions-968362aac6b9">Read</a>
                </article>
                <article>
                    <div className="img">
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1691337376842/77214e21-b5ea-4110-b730-8a07fc435a35.jpeg?w=340&h=170&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="title" />
                    </div>
                    <h1>Get User's Location and Currency in Django</h1>
                    <p>Do not underestimate the power of Geolocation with Django</p>
                    <a href="https://delighto.hashnode.dev/user-location-country-and-currency-in-django">Read</a>
                </article>
            </div>
        </div>
    )
}