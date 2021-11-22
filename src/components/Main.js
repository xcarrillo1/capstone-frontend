import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import AllVenues from '../pages/AllVenues';
import CreateVenue from '../pages/CreateVenue';
import Home from '../pages/Home';
import Show from '../pages/Show';
import Vt from '../pages/Vt';

export default function Main(props) {
    const [venue, setVenue] = useState(null);

    const URL = "https://lit-bastion-80745.herokuapp.com/";

    const getVenue = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setVenue(data);
    };

    const createVenue = async (venue) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(venue),
        });
        getVenue();
    };

    const updateVenue = async (venue, id) => {
        await fetch(URL + id, { 
            method: "PUT" , 
            headers: {
                "Content-Type": "Application/json", 
            },
            body: JSON.stringify(venue),
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
                <Route path='/allvenues' element={<AllVenues venue={venue} />} />
                <Route path='/createvenue' element={<CreateVenue venue={venue} createVenue={createVenue} />} />
                <Route path='/allvenues/:id' element={<Show venue={venue} updateVenue={updateVenue} deleteVenue={deleteVenue} />} />
                <Route path='/vt' element={<Vt />} />
            </Routes>
        </main>
    )
}