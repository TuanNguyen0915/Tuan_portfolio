import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar-section">
            <div className="left-nav">
                <div className="nav-name">Tuan Nguyen</div>
                <span>toggle</span>
            </div>
            <div className="right-nav">
                <div className="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Project</li>
                    </ul>
                </div>
                <button className='btn navbar-btn'>
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default NavBar