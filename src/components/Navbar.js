
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return( 
        <nav>
        <div>
            <ul>
                <li><NavLink to='/main' className="link">Main page</NavLink></li>
                <li><NavLink to='/signin' className="link">login</NavLink></li>
                <li><NavLink to='/home' className="link">Dashboard (it's private)</NavLink></li>
                <li><NavLink to='/news' className="link">News</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;