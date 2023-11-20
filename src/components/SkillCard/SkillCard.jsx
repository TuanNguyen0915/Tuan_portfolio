import { FaAnglesRight } from "react-icons/fa6";
import './SkillCard.css'

const SkillCard = (props) => {
    return (
        <div className='skill-card'>
            <div
                className="sc-front"
            >
                <img className="front-IMG" src={props.skill.imgLink} alt="img" />
                <p>{props.skill.title}</p>
                <button className="btn sc-btn">
                    Learn More...
                </button>
            </div>
            <div className='sc-back'>
                {props.skill.items.map(item => (
                    <span key={item}>
                        <FaAnglesRight class='backIcon' /> <span className='items-span'>{item}</span>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SkillCard
