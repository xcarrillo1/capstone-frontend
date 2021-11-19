import { Route, Routes } from 'react-router-dom';
import AllPost from '../pages/AllPost';
import CreatePost from '../pages/CreatePost';
import Home from '../pages/Home';
import Show from '../pages/Show';
import Vt from '../pages/Vt';

export default function Main(props) {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allpost' element={<AllPost />} />
                <Route path='/createpost' element={<CreatePost />} />
                <Route path='/allpost/:id' element={<Show />} />
                <Route path='/vt' element={<Vt />} />
            </Routes>
        </main>
    )
} 
