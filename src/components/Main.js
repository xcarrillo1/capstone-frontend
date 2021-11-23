import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import AllVenues from '../pages/AllVenues';
import CreateVenue from '../pages/CreateVenue';
import Home from '../pages/Home';
import Show from '../pages/Show';
import Vt from '../pages/Vt';
import CreateSeat from "../pages/CreateSeat";

export default function Main(props) {
    const [venue, setVenue] = useState(null);
    const [seat, setSeat] = useState(null);

    const URL = "https://lit-bastion-80745.herokuapp.com/";

    const getVenue = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setVenue(data);
    };

    const getSeat = async () => {
        const response = await fetch(`${URL}seats`);
        const data = await response.json();
        setSeat(data);
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

    const createSeat = async(seat) => {
        await fetch(`${URL}seats`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(seat),
        });
        getSeat();
    }

    // const updateVenue = async (venue, id) => {
    //     await fetch(URL + id, { 
    //         method: "PUT" , 
    //         headers: {
    //             "Content-Type": "Application/json", 
    //         },
    //         body: JSON.stringify(venue),
    //     });
    //     getVenue();
    // }

    // const updateSeat = async (seat) => {
    //     await fetch(`${URL}seats`, { 
    //         method: "PUT" , 
    //         headers: {
    //             "Content-Type": "Application/json", 
    //         },
    //         body: JSON.stringify(seat),
    //     });
    //     getSeat();
    // }
    
    // const deleteVenue = async id => {
    //     await fetch(URL + id, { 
    //         method: "DELETE", 
    //     })
    //     getVenue();
    // }

    const deleteSeat = async id => {
        await fetch(`${URL}seats/${id}`, {
            method: 'DELETE',
        });
        getSeat();
    }

    useEffect(() => getVenue(), []);
    useEffect(() => getSeat(), []);

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allvenues' element={<AllVenues venue={venue} />} />
                <Route path='/createvenue' element={<CreateVenue venue={venue} createVenue={createVenue} />} />
                <Route path='/:name/:id' element={<Show venue={venue} seat={seat} deleteSeat={deleteSeat}/>}/>
                <Route path='/createseat' element={<CreateSeat seat={seat} createSeat={createSeat} />} />
                <Route path='/vt' element={<Vt />} />
            </Routes>
        </main>
    )
}