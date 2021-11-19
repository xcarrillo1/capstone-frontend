import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import AllPost from '../pages/AllPost';
import CreatePost from '../pages/CreatePost';
import Home from '../pages/Home';
import Show from '../pages/Show';
import Vt from '../pages/Vt';

export default function Main(props) {
    const [venue, setVenue] = useState(null);

    const URL = "http://127.0.0.1:8000/";

    const getVenue = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setVenue(data);
    };

    const createVenue = async (post) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(post),
        });
        getVenue();
    };

    const updateVenue = async (post, id) => {
        await fetch(URL + id, { 
            method: "PUT" , 
            headers: {
                "Content-Type": "Application/json", 
            },
            body: JSON.stringify(post),
        });
        getVenue();
    }
    
    const deleteVenue = async id => {
        await fetch(URL + id, { 
            method: "DELETE", 
        })
        getVenue();
    }

    useEffect(() => getVenue(), []);

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allpost' element={<AllPost venue={venue} />} />
                <Route path='/createpost' element={<CreatePost venue={venue} createVenue={createVenue} />} />
                <Route path='/allpost/:id' element={<Show venue={venue} updateVenue={updateVenue} deleteVenue={deleteVenue} />} />
                <Route path='/vt' element={<Vt />} />
            </Routes>
        </main>
    )
}