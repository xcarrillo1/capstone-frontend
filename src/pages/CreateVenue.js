import { useState } from "react";

export default function CreateVenue(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        location: "",
        indoor: false,
        outdoor: false,
        photo_url: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createVenue(newForm);
        setNewForm({
            name: "",
            location: "",
            indoor: false,
            outdoor: false,
            photo_url: "",
        });
        console.log(newForm);
    };

    return (
        <section className="container-new">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Venue Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.location}
                    name="location"
                    placeholder="City, State"
                    onChange={handleChange}
                />
                Indoor:
                <input
                    type="checkbox"
                    // value={newForm.indoor}
                    name="indoor"
                    onChange={handleChange}
                />
                Outdoor:
                <input
                    type="checkbox"
                    // value={newForm.outdoor}
                    name="outdoor"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.photo_url}
                    name="photo_url"
                    placeholder="Photo URL"
                    onChange={handleChange}
                />
                <input className="create" type="submit" value="Create Venue" />
            </form>
        </section>        
    );
} 