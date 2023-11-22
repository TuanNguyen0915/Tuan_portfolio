//react packages
import { HashLink } from 'react-router-hash-link'

// components
import SkillCard from '../SkillCard/SkillCard'
// resume
import myResume from '../../data/TuanNguyen-resume.pdf'
// icons
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { motion } from "framer-motion"

//css
import './About.css'

// data
import { skillsSet } from '../../data/data'

const About = (props) => {
    const transition = { duration: 1, type: 'spring' }
    return (
        <div
            className="about" id='about'>
            {/* left side */}
            <div className="a-left">
                <motion.div
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    className="a-intro">
                    <span >Introduction</span>
                    <span style={{ color: props.lightMode ? '' : 'whitesmoke' }}>Software Engineer</span>
                    <span
                        style={{ color: props.lightMode ? '' : '#e9e7c6' }}>
                        I&#39;m a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions. Carefulness and responsibility are two skills I learned while working in my previous career, which helped me approach SWE more easily, and work more efficiently. I am interested in technology and techniques in the full-stack development field to keep my passion for it.</span>
                </motion.div>
                <a href={myResume} download>
                    <button className='btn a-btn'>Download CV</button>
                </a>
                {/* arrows */}
                <div className='arrow a-arrow'>
                    <HashLink smooth to='#projects'>
                        <FaAngleDoubleDown className='a-down' />
                    </HashLink>
                    <HashLink smooth to='#navbar'>
                        <FaAngleDoubleUp className='a-up />' />
                    </HashLink>
                </div>
                <div className="blur l-blur"></div>
            </div>
            {/* right side */}
            <div className="a-right">
                <div className='f-card'
                >
                    <SkillCard skill={skillsSet[0]} lightMode={props.lightMode} />
                    <div className="blur r-blur"></div>
                </div>
                <div className="s-card">
                    <SkillCard skill={skillsSet[2]} lightMode={props.lightMode} />
                </div>
                <div className='t-card'>
                    <SkillCard skill={skillsSet[1]} lightMode={props.lightMode} />
                </div>
            </div>
        </div>
    )
}

export default About