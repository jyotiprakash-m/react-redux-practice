import React from 'react'
import { useLocation, Link } from 'react-router-dom'
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
                <Link to='/' className={location.pathname === "/" ? "active" : ""}>
                    <li>Work Place</li>
                </Link>
                <Link to='/home' className={location.pathname === "/home" ? "active" : ""}>
                    <li>Home Page</li>
                </Link>
                <Link to='/plan' className={location.pathname === "/plan" ? "active" : ""}>
                    <li>Planning</li>
                </Link>
                <Link to='/projects' className={location.pathname === "/projects" ? "active" : ""}>
                    <li>Projects Page</li>
                </Link>
            </ul>

        </div>
    )
}

export default NavBar
