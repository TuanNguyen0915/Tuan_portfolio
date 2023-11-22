import './NavBar.css'
import TuanSignature from '../../assets/images/Tuan_signature.png'
import TuanSignatureW from '../../assets/images/Tuan_signature_w.png'

import Toggle from '../Toggle/Toggle'

const NavBar = (props) => {
    return (
        <div className="navbar-section">
            <div className="left-nav">
                {props.lightMode?
                <img src={TuanSignature} alt='TuanNG' />:
                <img src={TuanSignatureW} alt='TuanNG' />
                }
                <Toggle handleOnClick={props.handleOnClick}/>
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