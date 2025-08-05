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
          <Route path="/" element={<Navigate to="./Home.jsx"/>}/>
          <Route path="/Home.jsx" element={<Home />}/>
          <Route path="/Team.jsx" element={<Team />}/>
          <Route path="/Features.jsx" element={<Features />}/>
          <Route path="/Background.jsx" element={<Background />}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )     
}

export default App
