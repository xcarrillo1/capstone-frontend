import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import AllPost from '../pages/AllPost';
import CreatePost from '../pages/CreatePost';
import Home from '../pages/Home';
import Show from '../pages/Show';
import Vt from '../pages/Vt';

export default function Main(props) {
    const [post, setPost] = useState(null);

    const URL = "https://lit-bastion-80745.herokuapp.com/seats/";

    const getPost = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPost(data);
    };

    const createPost = async (post) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(post),
        });
        getPost();
    };

    useEffect(() => getPost(), []);

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allpost' element={<AllPost post={post} />} />
                <Route path='/createpost' element={<CreatePost post={post} createPost={createPost} />} />
                <Route path='/allpost/:id' element={<Show />} />
                <Route path='/vt' element={<Vt />} />
            </Routes>
        </main>
    )
} 
