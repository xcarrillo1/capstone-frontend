import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function Show(props) {
    let { id, name } = useParams()

    const handleDeleteSeat = (element) => {
        props.deleteSeat(element.id)
    }

    const venue = props.venue.find(venue => venue.name === name)
    const seat = props.seat.filter(seat => seat.venue_id === parseInt(id))

    const loaded = () => {
        return (
            <div className="seatshow">
                <Link to="/createseat">Create New Seat</Link>
                <h1>{venue.name}</h1>
                {
                    seat.map(seat => (
                        <div className="seats" key={seat.id}>
                            <br/>
                            <img src={seat.image_url} alt={seat.slocation} />
                            <h4>Location: {seat.slocation}</h4>
                            <h4>Rating: {seat.rating}</h4>
                            <button id="delete" onClick={()=> handleDeleteSeat(seat)}>
                                    DELETE
                            </button>
                            
                        </div>
                    ))
                }
            </div>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return props.venue ? loaded() : loading()
} 