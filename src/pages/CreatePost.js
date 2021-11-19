import { useState } from "react";

export default function CreatePost(props) {
    const [newForm, setNewForm] = useState({
        venue: "",
        slocation: "",
        rating: "",
        image_url: "",
        reviewer: "",
        description: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPost(newForm);
        setNewForm({
            venue: "",
            slocation: "",
            rating: "",
            image_url: "",
            reviewer: "",
            description: "",
        });
    };

    return (
        <section className="container-new">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.venue}
                    name="venue"
                    placeholder="Venue Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.slocation}
                    name="slocation"
                    placeholder="Section: , Row: , Seat:"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.rating}
                    name="rating"
                    placeholder="Rating out of 5"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image_url}
                    name="image_url"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.reviewer}
                    name="reviewer"
                    placeholder="Your Name"
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />
                <input className="create" type="submit" value="Create Post" />
            </form>
        </section>        
    );
} 