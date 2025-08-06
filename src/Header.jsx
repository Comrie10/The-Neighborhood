import { Link } from 'react-router-dom';
import Features from './Features.jsx'
function Header(){
    return(
        <header className="Nav_Header">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">
                        <img src="/The Neighborhood.png" alt="Logo" id="heading_logo" />
                        </Link>
                    </li>
                    <li id="p1">
                        <Link to="/home" className="HButton">Home</Link>
                    </li>
                    <li id="p1">
                        <Link to="/features" className="HButton">Features</Link>
                    </li>
                    <li id="p1">
                        <Link to="/background" className="HButton">Background</Link>
                    </li>
                    <li id="p1">
                        <Link to="/team" className="HButton">Team</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );    
}

export default Header