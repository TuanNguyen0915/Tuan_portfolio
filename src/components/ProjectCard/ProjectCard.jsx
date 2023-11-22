import './ProjectCard.css'
import { FaPlayCircle } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const ProjectCard = (props) => {

    return (
        <div
            onClick={() => { props.handleClick(props.project.id) }}
            className='p-card'
            style={{ border: `${props.project.clicked ? 'solid 6px var(--orangeCard)' : '1px solid var(--gray)'}` }}
        >   {props.project.clicked ?
            <div className='p-card-active'>
                <span>{props.project.name}</span>
                <span
                    style={{ color: props.lightMode ? '' : '#e9e7c6' }}
                >
                    {/* {props.project.decs.join("     ")} */}
                    {props.project.langs.map(item => (
                        <span key={item}>
                            {item}
                        </span>
                    ))}
                </span>
                <div className='p-imgs-active'>
                    <img src={props.project.img1} alt="" />
                    <img src={props.project.img2} alt="" />
                    <img src={props.project.img3} alt="" />
                </div>
                <span
                    style={{ color: props.lightMode ? '' : '#e9e7c6' }}
                >
                    {props.project.decs}
                </span>
                <div className='social'>
                    <NavLink className='btn p-btn' to={props.project.play} target='_blank'>
                        <FaPlayCircle className='social-icon' /> play demo
                    </NavLink>
                    <NavLink className='btn p-btn' to={props.project.github} target='_blank'>
                        <FaGithub className='social-icon' /> github
                    </NavLink>
                </div>
            </div>
            :
            <div className='p-card-un-active'
                style={{ color: props.lightMode ? '' : '#e9e7c6' }}>
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