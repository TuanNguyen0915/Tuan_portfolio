// components
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Project from './components/Project/Project'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// css
import './App.css'
import { useState } from 'react'

function App() {
    const [lightMode, setLightMode] = useState(true)
    const handleOnClick = (clicked) => {
        setLightMode(!clicked)
    }
    return (
        <main className='App'
            style={{
                background: lightMode ? '' : '#222',
                color: lightMode ? '' : 'white'
            }}
        >
            <NavBar handleOnClick={handleOnClick} lightMode={lightMode}/>
            <Intro />
            <About />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </main>
    )
}

export default App
