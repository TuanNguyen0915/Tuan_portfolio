import { useState } from 'react'
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
//data
import { myProjects } from '../../data/data'
//css
import './Project.css'

const Project = (props) => {
    const transition = { duration: 4, type: 'spring' }
    const cardTransition = { duration: 6, type: 'spring' }
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
                <motion.span
                    initial={{ x: -300 }} whileInView={{ x: 0 }} transition={transition}
                >Projects</motion.span>
                <motion.span
                    initial={{ x: 300 }} whileInView={{ x: 0 }} transition={transition}
                    style={{ color: props.lightMode ? '' : '#e9e7c6' }}
                >
                    These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
                </motion.span>
            </div>
            <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={cardTransition}
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
                </div>
            </motion.div>
        </div>
    )
}

export default Project