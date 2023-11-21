//components
import ProjectCard from '../ProjectCard/ProjectCard';

import { HashLink } from 'react-router-hash-link'
// icons
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
//data
import { useState } from 'react'
import { myProjects } from '../../data/data'

//css
import './Project.css'
const Project = () => {
    const [currId, setCurrId] = useState(1)

    // const handleClick = idx => {
    //     setCurrId(idx)
    // }
    const handleClick = idx => {
        myProjects.map(project => {
            project.clicked = project.id === idx ? true : false
        })
        setCurrId(idx)
    }
    return (
        <div className="projects" id='projects'>
            <div className='p-decs'>
                <span>Case Studies</span>
                <span>Projects</span>
                <span>
                    These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
                </span>
            </div>

            <div className="p-list">
                {myProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        currId={currId}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            {/* arrows */}
            <div className='arrow a-arrow'>
                <HashLink smooth to='#projects'>
                    <FaAngleDoubleDown className='a-down' />
                </HashLink>
                <HashLink smooth to='#'>
                    <FaAngleDoubleUp className='a-up />' />
                </HashLink>
            </div>
        </div>
    )
}

export default Project