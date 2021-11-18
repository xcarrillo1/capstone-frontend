import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <div className="header">
            <Link to="/">
                <h1>🏟 YourSeats 💺</h1>
            </Link>
        </div>
    )
} 