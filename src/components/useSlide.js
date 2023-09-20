import { useEffect, useRef } from "react"

const useSlide = () => {
    const containerRef = useRef(null)

    const handleIntersection  = (entries) => {
        const [ entry ] = entries
        if (entry.isIntersecting) {
            containerRef.current.classList.remove('slide')
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection , {
            root: null,
            rootMargin: "-100px",
        })

        const currentRef = containerRef.current;
        if (currentRef) observer.observe(currentRef)

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, [])

    return [containerRef]
}

export default useSlide;
