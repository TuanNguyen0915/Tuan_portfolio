//react packages
import { HashLink } from 'react-router-hash-link';
// components
import SkillCard from '../SkillCard/SkillCard'
// resume
import myResume from '../../data/TuanNguyen-resume.pdf'
// icons
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

//css
import './About.css'

// data
import { skillsSet } from '../../data/data'

const About = (props) => {
    return (
        <div className="about" id='about'>
            {/* left side */}
            <div className="a-left">
                <div className="a-intro">
                    <span >Introduction</span>
                    <span style={{ color: props.lightMode ? '' : 'whitesmoke' }}>Software Engineer</span>
                    <span
                        style={{ color: props.lightMode ? '' : '#e9e7c6' }}>
                        I&#39;m a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions. Carefulness and responsibility are two skills I learned while working in my previous career, which helped me approach SWE more easily, and work more efficiently. I am interested in technology and techniques in the full-stack development field to keep my passion for it.</span>
                </div>
                <a href={myResume} download>
                    <button className='btn a-btn'>Download CV</button>
                </a>
                {/* arrows */}
                <div className='arrow a-arrow'>
                    <HashLink smooth to='#projects'>
                        <FaAngleDoubleDown className='a-down' />
                    </HashLink>
                    <HashLink smooth to='#'>
                        <FaAngleDoubleUp className='a-up />' />
                    </HashLink>
                </div>
                <div className="blur l-blur"></div>
            </div>
            {/* right side */}
            <div className="a-right">
                <div className='f-card'>
                    <SkillCard skill={skillsSet[0]} lightMode={props.lightMode} />
                    <div className="blur r-blur"></div>
                </div>
                <div className="s-card">
                    <SkillCard skill={skillsSet[2]} />
                </div>
                <div className='t-card'>
                    <SkillCard skill={skillsSet[1]} />
                </div>
            </div>

        </div>
    )
}

export default About