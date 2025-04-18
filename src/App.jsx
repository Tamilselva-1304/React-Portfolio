
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Aboutme from './pages/Aboutme'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
