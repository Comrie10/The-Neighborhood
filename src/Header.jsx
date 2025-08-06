import { Link } from 'react-router-dom';
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
                        <Link to="/Home" className="HButton">Home</Link>
                    </li>
                    <li id="p1">
                        <Link to="/Features" className="HButton">Features</Link>
                    </li>
                    <li id="p1">
                        <Link to="/Background" className="HButton">Background</Link>
                    </li>
                    <li id="p1">
                        <Link to="/Team" className="HButton">Team</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );    
}

export default Header