//react packages
import { HashLink } from "react-router-hash-link";
//react icons
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaAngleDoubleDown } from "react-icons/fa";

//css
import './Intro.css'

//images
import Vector1 from '../../assets/images/Vector1.png'
import Vector2 from '../../assets/images/Vector2.png'
import MyPic from '../../assets/images/myPic_tran.png'

const Intro = () => {
    return (
        <div className="intro">
            {/* Left side */}
            <div className="i-left">
                <div className="i-name">
                    <span>
                        Hi! I Am
                    </span>
                    <span>Tuan Nguyen</span>
                    <span>
                        I&#39;m a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions.
                    </span>
                </div>
                <button className='btn i-btn'>
                    Hire me
                </button>
                <div className="i-icons">
                    <FaGithub />
                    <FaLinkedinIn />
                    <FaFacebookF />
                </div>
                {/* Arrow */}
                <div className='arrow i-arrow'>
                    <HashLink smooth to='#about'>
                        <FaAngleDoubleDown className='a-down' />
                    </HashLink>
                </div>
            </div>
            {/* Right side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={MyPic} />
                {/* blur background  */}
                <div className="blur"></div>
                <div className="blur2"></div>
            </div>
        </div>
    )
}

export default Intro