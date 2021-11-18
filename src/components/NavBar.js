import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav className="navbar">
            <Link to="/allpost">
                <div>View Posts</div>
            </Link>
            <Link to="/createpost">
                <div>Create View</div>
            </Link>
            <Link to="/vt">
                <div>Venues/Teams</div>
            </Link>
        </nav>
    )
} 