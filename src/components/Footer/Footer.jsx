import './Footer.css'
import footerIMG from "/assets/images/wave.png"
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { motion } from 'framer-motion';
const Footer = () => {
    const transition = { duration: 1, type: 'spring' }
    return (
        <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={transition}
            className="footer">
            <img src={footerIMG} alt="" />
            <div className='f-content'>
                <span>tuan.nat915@gmail.com</span>
                <div className="f-icons">
                    <FaLinkedinIn />
                    <FaGithubAlt />
                    <FaFacebookF />
                </div>
            </div>
        </motion.div>
    )
}

export default Footer