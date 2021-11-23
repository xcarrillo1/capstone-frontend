import { Link } from "react-router-dom"

export default function AllVenues(props) {
    const loaded = () => {
        return props.venue.map((venue) => (
            <div key={venue.id} className="venue">
                <h2>{venue.name}</h2>
                <p>{venue.location}</p>
                <Link to={`/${venue.name}/${venue.id}`}><img src={venue.photo_url} alt={venue.name} /></Link>
            </div>
        ));
    };
    // console.log(props.venue);

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.venue ? loaded() : loading()
} 