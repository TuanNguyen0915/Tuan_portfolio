// components
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Project from './components/Project/Project'
import Experience from './components/Experience/Experience'
// css
import './App.css'

function App() {
    return (
        <main className='App'>
            <NavBar />
            <Intro />
            <About />
            <Project />
            <Experience />
        </main>
    )
}

export default App
