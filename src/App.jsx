import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header.jsx'
import Home from './Home.jsx'
import Features from './Features.jsx'
import Team from './Team.jsx'
import Footer from './Footer.jsx'
import Background from './Background.jsx'

function App() {
  return(
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="./Home.jsx" replace/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/features" element={<Features />} />
          <Route path="/background" element={<Background />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )     
}

export default App
