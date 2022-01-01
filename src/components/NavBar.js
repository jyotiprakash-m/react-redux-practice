import React from 'react'
import { useLocation } from 'react-router-dom'
function NavBar() {
    const location = useLocation();
    // const [path, setPath] = useState(location.pathname)
    // console.log(typeof (path));
    // useEffect(() => {
    //    setPath(path)
    // }, [location])
    return (
        <div className='navBar'>
            <ul>
                <a href='/' className={location.pathname === "/" ? "active" : ""}>
                    <li>Work Place</li>
                </a>
                <a href='/home' className={location.pathname === "/home" ? "active" : ""}>
                    <li>Home Page</li>
                </a>
                <a href='/about' className={location.pathname === "/about" ? "active" : ""}>
                    <li>About Page</li>
                </a>
                <a href='/projects' className={location.pathname === "/projects" ? "active" : ""}>
                    <li>Projects Page</li>
                </a>
            </ul>

        </div>
    )
}

export default NavBar
