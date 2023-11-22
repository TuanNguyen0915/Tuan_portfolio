import './NavBar.css'
import TuanSignature from '../../assets/images/Tuan_signature.png'
import TuanSignatureW from '../../assets/images/Tuan_signature_w.png'
import { HashLink } from 'react-router-hash-link'
import Toggle from '../Toggle/Toggle'

const NavBar = (props) => {
    return (
        <div className="navbar-section" id='navbar'>
            <div className="left-nav">
                {props.lightMode ?
                    <img className='nav-sign' src={TuanSignature} alt='TuanNG' /> :
                    <img className='nav-sign' src={TuanSignatureW} alt='TuanNG' />
                }
                <Toggle handleOnClick={props.handleOnClick} />
            </div>
            <div className="right-nav">
                <div className="nav-list">
                    <ul>
                        <li>
                            <HashLink smooth to='#navbar'
                                style={props.lightMode ? { color: 'black' } : { color: 'whitesmoke' }}
                            >
                                Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='#about'
                                style={props.lightMode ? { color: 'black' } : { color: 'whitesmoke' }}
                            >
                                About Me
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='#projects'
                                style={props.lightMode ? { color: 'black' } : { color: 'whitesmoke' }}
                            >
                                Project
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to='#exp'
                                style={props.lightMode ? { color: 'black' } : { color: 'whitesmoke' }}
                            >
                                Experience
                            </HashLink>
                        </li>
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