import { Link } from "react-router-dom"

export default function AllVenues(props) {
    const loaded = () => {
        return props.venue.map((venue) => (
            <div key={venue.id} className="venue">
                <Link to={`/allvenues/${venue.id}`}><h2>{venue.name}</h2></Link>
                    <img src={venue.photo_url} alt={venue.name} />
            </div>
        ));
    };
    console.log(props.venue);

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.venue ? loaded() : loading()
} 