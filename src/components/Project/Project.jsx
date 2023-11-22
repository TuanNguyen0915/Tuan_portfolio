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

const Project = (props) => {

    const [currId, setCurrId] = useState(1)
    const handleClick = idx => {
        myProjects.map(project => {
            project.clicked = project.id === idx ? true : false
        })
        setCurrId(idx)
    }

    return (
        <div
            className="projects" id='projects'>
            <div
                
                className='p-decs'
            >
                <span
                >Projects</span>
                <span style={{ color: props.lightMode ? '' : '#e9e7c6' }}>
                    These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
                </span>
            </div>
            <div
                className="p-list">
                <div className='p-active'>
                    {myProjects.map(project => (
                        project.clicked ?
                            <ProjectCard lightMode={props.lightMode}
                                key={project.id}
                                project={project}
                                currId={currId}
                                handleClick={handleClick}
                            />
                            : null
                    ))}
                </div>
                <div className='p-un-active'>
                    <div className='p-pc'>
                        {myProjects.map(project => (
                            !project.clicked ?
                                <ProjectCard lightMode={props.lightMode}
                                    key={project.id}
                                    project={project}
                                    currId={currId}
                                    handleClick={handleClick}
                                />
                                : null
                        ))}
                    </div>
                    {/* arrows */}
                    {/* <div className='arrow a-arrow'>
                        <HashLink smooth to='#exp'>
                            <FaAngleDoubleDown className='a-down' />
                        </HashLink>
                        <HashLink smooth to='#about'>
                            <FaAngleDoubleUp className='a-up />' />
                        </HashLink>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Project