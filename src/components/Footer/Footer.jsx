import './Footer.css'
import footerIMG from "/assets/images/wave.png"
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <img src={footerIMG} alt="" />
            <div className='f-content'>
                <span>tuan.nat915@gmail.com</span>
                <div className="f-icons">
                    <FaLinkedinIn />
                    <FaGithubAlt />
                    <FaFacebookF />
                </div>
            </div>
        </div>
    )
}

export default Footer