

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return( 
        <nav>
        <div>
            <ul>
                <li><NavLink to='/main' className="link">Main page</NavLink></li>
                <li><NavLink to='/preferences' className="link">Preferences</NavLink></li>
                <li><NavLink to='/dashboard' className="link">Dashboard (it's private)</NavLink></li>
                <li><NavLink to='/news' className="link">News</NavLink></li>
                <li><NavLink to='/login' className="link">Login</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;