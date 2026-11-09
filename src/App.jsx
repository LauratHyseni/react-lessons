
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'
import { Routes, Route, Link } from 'react-router-dom'




function App() {


  return (
    <div>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/courses">Courses</Link>
    <Link to="/notfound">NotFound</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
  
}

export default App
