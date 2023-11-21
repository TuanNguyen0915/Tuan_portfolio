import './ProjectCard.css'
import { FaPlayCircle } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const ProjectCard = (props) => {

    return (
        <div
        onClick={()=> {props.handleClick(props.project.id)}}
        className='p-card'
        >   {props.project.clicked?
            <div className='p-card-active'>
                <span>{props.project.name}</span>
                <span>{props.project.decs}</span>
            </div>
            :
            <div className='p-card-un-active'>
                {props.project.name}
            </div>
        }
        </div>

        // <div
        //     onClick={() => { props.handleClick(props.project.id) }}
        //     className={`${props.currId === props.project.id ? 'p-card p-active' : 'p-card'}`}
        // >
        //     {props.currId === props.project.id
        //         ?
        //         <div style={{ display: 'flex', flexDirection: 'column' }}>
        //             <div className='p-info-active'>
        //                 <h1>{props.project.name}</h1>
        //                 <div className='p-imgs-active'>
        //                     <img src={props.project.imgLink} alt="" />
        //                     <img src={props.project.imgLink} alt="" />
        //                     <img src={props.project.imgLink} alt="" />
        //                 </div>
        //             </div>
                    
        //             <div className='social'>
        //                 <NavLink className='btn p-btn'>
        //                     <FaPlayCircle className='social-icon' /> play demo
        //                 </NavLink>
        //                 <NavLink className='btn p-btn'>
        //                     <FaGithub className='social-icon' /> github
        //                 </NavLink>
        //             </div>
        //         </div>

        //         :
        //         <div className='p-info'>
        //             <div className='p-img'>
        //                 <img src={props.project.imgLink} alt="" />
        //             </div>
        //             <div className='p-content'>
        //                 <h1>{props.project.name}</h1>
        //             </div>
        //         </div>
        //     }
        // </div>
    )
}

export default ProjectCard