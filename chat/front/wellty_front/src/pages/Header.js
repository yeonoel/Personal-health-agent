import { Link } from "react-router-dom";
import '../styles/Header.css'

const Header = () => {
    return (
        
            <nav>
                
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/consutation">Consultation</Link>
                <Link  className="link" to="/pharmacies">Pharmacies</Link>
                <Link className="link" to="/docteurs">Docteurs</Link>

            </nav>
    )
}

export default Header;