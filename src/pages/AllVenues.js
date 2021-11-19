import { Link } from "react-router-dom"

export default function AllVenues(props) {
    const loaded = () => {
        return props.venue.map((venue) => (
            <div key={venue._id} className="venue">
                <Link to={`/allvenues/${venue._id}`}><img src={venue.photo_url} alt={venue.name} /></Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.venue ? loaded() : loading()
} 