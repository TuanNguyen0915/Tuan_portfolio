import './NavBar.css'
import TuanSignature from '../../assets/images/Tuan_signature.png'
const NavBar = () => {
    return (
        <div className="navbar-section">
            <div className="left-nav">
                <img src={TuanSignature} alt='TuanNG' />
                <span>toggle</span>
            </div>
            <div className="right-nav">
                <div className="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Project</li>
                        <li>Experience</li>
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