import { Routes, Route, Navigate } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<Navigate to="/Home"/>}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Team" element={<Team />}/>
          <Route path="/Features" element={<Features />}/>
          <Route path="/Background" element={<Background />}/>
        </Routes>
      <Footer/>
    </>
  );    
}

export default App
