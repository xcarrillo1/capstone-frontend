import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className="navbar">
            <Link to="/allvenues">
                <div>View Venues</div>
            </Link>
            <Link to="/createvenue">
                <div>Create Venue</div>
            </Link>
            <Link to="/vt">
                <div>Venues/Teams</div>
            </Link>
        </nav>
    )
} 