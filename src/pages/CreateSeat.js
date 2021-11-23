import { useState } from "react";

export default function CreateSeat(props) {
    const [newSeat, setNewSeat] = useState({
        slocation: "",
        rating: "",
        image_url: "",
        reviewer: "",
        description: "",
    });

    const handleChange = (event) => {
        setNewSeat({ ...newSeat, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSeat(newSeat);
        setNewSeat({
            slocation: "",
            rating: "",
            image_url: "",
            reviewer: "",
            description: "",
        });
        console.log(newSeat);
    };

    return (
        <section className="container-new">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    // value={newSeat.slocation}
                    name="slocation"
                    placeholder="Section: , Row: , Seat:"
                    onChange={handleChange}
                />
                Rating: <select>
                    type="text"
                    name="rating"
                    onChange={handleChange}
                    <option value="⭐️">⭐️</option>
                    <option value="⭐️⭐️">⭐️⭐️</option>
                    <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
                    <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
                    <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
                </select>
                <input
                    type="text"
                    // value={newSeat.image_url}
                    name="image_url"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    // value={newSeat.reviewer}
                    name="reviewer"
                    placeholder="Your Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    // value={newSeat.description}
                    name="description"
                    placeholder="Brief Description of Your Seat"
                    onChange={handleChange}
                />
                <input className="create" type="submit" value="Create Seat" />
            </form>
        </section>        
    );
} 