// components
import SkillCard from '../SkillCard/SkillCard'
//css
import './About.css'

// data
import { skillsSet } from '../../data/data'

const About = () => {
    return (
        <div className="about" id='about'>
            {/* left side */}
            <div className="a-left">
                <div className="a-intro">
                    <span>INTRODUCTION</span>
                    <span>Software Engineer</span>
                    <span>I&#39;m a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions. Carefulness and responsibility are two skills I learned while working in my previous career, which helped me approach SWE more easily, and work more efficiently. I am interested in technology and techniques in the full-stack development field to keep my passion for it.</span>
                </div>
                <button className='btn a-btn'>Download CV</button>
                <SkillCard skill={skillsSet[0]} />
                <div className="blur a-blur"></div>
            </div>
            {/* right side */}
            <div className="a-right">
                This is right
            </div>
        </div>
    )
}

export default About