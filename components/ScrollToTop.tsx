import { useEffect } from "react"
import { useRouter } from "next/router"

const ScrollToTop = () => {
    const { pathname } = useRouter()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default ScrollToTop
