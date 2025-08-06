
import Features from './Features.jsx'
function Header(){
    return(
        <header className="Nav_Header">
            <nav>
                <ul>
                    <li><a href="./Home.jsx"><img src="\The Neighborhood.png" alt="Logo" id="heading_logo"/></a></li>
                    <li id="p1"><a href="./Home.jsx" className= "HButton">Home</a></li>
                    <li id="p1"><a href="./Features.jsx" className= "HButton">Features</a></li>
                    <li id="p1"><a href="./Background.jsx" className= "HButton">Background</a></li>
                    <li id="p1"><a href="./Team.jsx" className= "HButton">Team</a></li>
                </ul>
            </nav>
        </header>
    );    
    // the ribbon
}

export default Header