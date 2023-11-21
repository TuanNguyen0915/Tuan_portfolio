import './ProjectCard.css'
import { FaPlayCircle } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const ProjectCard = (props) => {

    return (
        <div
            onClick={() => { props.handleClick(props.project.id) }}
            className={`${props.currId === props.project.id ? 'project-card active' : 'project-card'}`}
        >
            {props.active === props.project.id
                ?
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='project-info-active'>
                        <div className='project-img-active'>
                            <img src={props.project.imgLink} alt="" />
                        </div>
                        <div className='project-content'>
                            <h1>{props.project.name}</h1>
                            <p>{props.project.decs}</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eos ullam, dignissimos molestias asperiores, voluptatibus</p>
                        </div>
                    </div>
                    <div className='social'>
                        <NavLink>
                            <FaPlayCircle className='social-icon' /> play demo
                        </NavLink>
                        <NavLink>
                            <FaGithub className='social-icon' /> github
                        </NavLink>
                    </div>
                </div>

                :
                <div className='project-info'>
                    <div className='project-img'>
                        <img src={props.project.imgLink} alt="" />
                    </div>
                    <div className='project-content'>
                        <h1>{props.project.name}</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectCard