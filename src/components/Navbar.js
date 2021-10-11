import react from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return( 
        <nav>
        <div>
            <ul>
                <li><Link to='/' className="link">Main page</Link></li>
                <li><Link to='/Preferences' className="link">Preferences</Link></li>
                <li><Link to='/Dashboard' className="link">Dashboard (it's private)</Link></li>
                <li><Link to='/News' className="link">News</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;